import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import { useScrollTop } from "./hooks";

function App() {
  useScrollTop()
  return (
    <div className="App">
      <AppHeader />
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
}

export default App;
