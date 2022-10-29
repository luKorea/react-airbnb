import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <div className="App">
      <div className="header">项目头部</div>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <div className="footer">项目底部</div>
    </div>
  );
}

export default App;
