import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import HowToPrevent from "./pages/HowToPrevent";
import FindHelp from "./pages/FindHelp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "how-to-prevent",
        element: <HowToPrevent />,
      },
      {
        path: "find-help",
        element: <FindHelp />,
      },
    ],
  },
]);

export default router;