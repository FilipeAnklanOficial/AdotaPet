import { createBrowserRouter } from "react-router-dom";
import { ROOT_PATH } from "../constants/route.constant";
import { Home } from "../screens";
import { Tela2 } from "../screens/tela2/Tela2";

export const routesList = createBrowserRouter([
  {
    path: ROOT_PATH,
    element: <Home />,
  },

    {
    path: "/tela2",
    element: <Tela2 />,
  },
]);
