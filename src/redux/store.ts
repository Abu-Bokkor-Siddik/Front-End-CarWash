import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import registerReducer from "./features/RegisterSlice";
import loginReducer from "./features/loginSlice";
import userReducer from "./features/userSlice";
import bookingReducer from "./features/bookingSlice";
import compareReducer from "./features/compareSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    register: registerReducer,
    login: loginReducer,
    user: persistedReducer,
    booking:bookingReducer,
    compare:compareReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
