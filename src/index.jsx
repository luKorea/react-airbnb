import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// 全家桶
// 统一使用history路由
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
// 样式相关
import "normalize.css";
import "./assets/css/index.less";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      {/* styled-components 主题配置  */}
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </Suspense>
);
