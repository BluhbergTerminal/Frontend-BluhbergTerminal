import "./styles.css";
import { useRoutes } from "hookrouter";
import HomePage from "./sites/HomePage";
import NotFoundPage from "./sites/NotFoundPage";
import Navbar from "./components/Navbar";
import "antd/dist/antd.css";
import { Layout } from "antd";

const routes = {
  "/": () => <HomePage />
};
export default function App() {
  const routeResult = useRoutes(routes);

  return (
  <>
  <Layout>
      <Layout.Header>
  <Navbar/>
      </Layout.Header>
      <Layout.Content>
  {routeResult || <NotFoundPage />}
  </Layout.Content>
  <Layout.Footer>
    </Layout.Footer>
        </Layout>
      </>)
}
