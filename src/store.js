import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../src/crud-app/crud-app.slice";

const store = () => {
  return configureStore({
    reducer: {
      employees: employeesReducer,
    },
    middleware: (getDefaultMiddleWare) => {
      return getDefaultMiddleWare();
    },
  });
};

export default store;
