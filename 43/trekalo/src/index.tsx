import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Provider>,
  document.getElementById("root")
);
