import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cookieReducer from "./features/cookie";

const store = configureStore({
  reducer: {
    cookie: cookieReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
