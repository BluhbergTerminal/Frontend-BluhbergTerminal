import "./styles.css";
import { useRoutes } from "hookrouter";
import HomePage from "./sites/HomePage";
import NotFoundPage from "./sites/NotFoundPage";
import Navbar from "./components/Navbar";

const routes = {
  "/": () => <HomePage />
};
export default function App() {
  const routeResult = useRoutes(routes);

  return (
  <>
  <Navbar/>
  {routeResult || <NotFoundPage />}
      </>)
}
