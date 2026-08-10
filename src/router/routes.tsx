import type { RouteObject } from "react-router";

import Catalog from "../pages/Catalog";
import CatalogHome from "../pages/CatalogHome";
import Home from "../pages/Home";

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "catalogo",
    element: <CatalogHome />,
  },
  {
    path: "catalogo/:slug",
    element: <Catalog />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
];
