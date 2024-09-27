import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root.tsx";
import Booking from "./page/Booking.tsx";
import Service from "./page/Service.tsx";
import Login from "./page/Login.tsx";
import { Toaster} from "sonner";
import Home from "./page/Home.tsx";
import SignUp from "./page/SignUp.tsx";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./components/layout/ProtectedRoute.tsx";
import Dynamic from "./page/Dynamic.tsx";
import RootDashBoard from "./components/layout/dashboard/RootDashBoard.tsx";
import Dashboard from "./page/Dashboard.tsx";
import DService from "./components/layout/dashboard/DService.tsx";
import DSlot from "./components/layout/dashboard/share/slotDB/DSlot.tsx";
import UserDM from "./components/layout/dashboard/UserDM.tsx";
import BookingInfo from "./components/layout/dashboard/user/BookingInfo.tsx";
import ServiceSlot from "./components/layout/dashboard/user/ServiceSlot.tsx";
import CompareService from "./components/layout/dashboard/CompareService.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: (
      <>
        <h1>Error page</h1>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "booking",
        element: <Booking></Booking>,
      },
      {
        path: "service",
        element: <Service></Service>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "sign",
        element: <SignUp></SignUp>,
      },
      {
        path: "/slot/:id",
        element: <Dynamic></Dynamic>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/api/slots/availability?serviceId=${params.id}`
          ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <RootDashBoard></RootDashBoard>,
    children: [
      {
        path: "",
        element: <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>,
      },
      {
        path: "serviceDb",
        element: <DService></DService>,
      },
      {
        path: "slotDb",
        element: <DSlot></DSlot>,
      },
      {
        path: "userDb",
        element: <UserDM></UserDM>,
      },
      {
        path: "bookinginfo",
        element: <BookingInfo></BookingInfo>,
      },
      {
        path: "serviceslot",
        element: <ServiceSlot></ServiceSlot>,
      },
      {
        path: "compare",
        element: <CompareService></CompareService>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster></Toaster>
    </Provider>
  </React.StrictMode>
);
