import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root.tsx";
import Booking from "./page/Booking.tsx";
import Service from "./page/Service.tsx";
import Login from "./page/Login.tsx";
import Dashboard from "./page/Dashboard.tsx";
import Home from "./page/Home.tsx";
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
        path:'dashboard',
        element:<Dashboard></Dashboard>
      },
      // {
      //   path:'management',
      //   // element:<Management></Management>
      // },
      // {
      //   path:'/details/:id',
      //   // element:<Dynamic></Dynamic>,
      //   // loader:({params})=> fetch(`http//localhost${params.id}`)
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
