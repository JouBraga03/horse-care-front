import {
  createBrowserRouter,
} from "react-router-dom"

import App from "../../App";
import { Routes } from "./constants";
import Home from "../../pages/Home";

 const routes = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
    children: [
      {
        path: Routes.HOME,
        element: <Home /> 
      },
      {
        path: Routes.HORSE,
        async lazy() {
          let component = await import('../../pages/Cavalo');
          return { Component: component.default };
        },
      },
      {
        path: Routes.CLIENT,
        async lazy() {
          let component = await import('../../pages/Cliente');
          return { Component: component.default };
        },
      },
      {
        path:Routes.MATERIALS,
        async lazy() {
          let component = await import('../../pages/Materiais');
          return { Component: component.default };
        },
      }
    ]
  },
]);

export default routes