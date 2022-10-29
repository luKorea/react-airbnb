import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// 全家桶
// 统一使用history路由
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


import App from "./App";
import store from './store';
// 样式相关
import "normalize.css";
import "./assets/css/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
