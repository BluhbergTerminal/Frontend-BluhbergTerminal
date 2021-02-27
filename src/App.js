import "./styles.css";
import { useRoutes } from "hookrouter";
import HomePage from "./sites/HomePage";
import NotFoundPage from "./sites/NotFoundPage";

const routes = {
  "/": () => <HomePage />
};
export default function App() {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}
