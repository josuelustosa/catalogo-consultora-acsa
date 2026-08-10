import type { RouteObject } from "react-router";

import Catalog from "../pages/Catalog";
import CatalogHome from "../pages/CatalogHome";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

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
    element: <NotFound />,
  },
];
