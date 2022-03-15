import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./components/layout/Layout";

import "./Style.scss";
const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((r, i) => {
            return (
              <Route key={i + "page-route"} path={r.path} element={r.page} />
            );
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
