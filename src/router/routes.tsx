import type { RouteObject } from "react-router"

import { catalogDataBySlug } from "../data/catalogs"
import { CATALOG_NAV_ITEMS } from "../mocks/nav-item.mock"
import Catalog from "../pages/Catalog"
import CatalogPage from "../pages/CatalogPage"
import Home from "../pages/Home"

const catalogChildrenRoutes: RouteObject[] = CATALOG_NAV_ITEMS.map((item) => ({
  path: item.slug,
  element: <CatalogPage data={catalogDataBySlug[item.slug]} />,
}))

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "catalogo",
    element: <Catalog />,
    children: [
      {
        index: true,
        element: <p className="text-primary-100/80">Selecione um catalogo para continuar.</p>,
      },
      ...catalogChildrenRoutes,
      {
        path: "*",
        element: <h2 className="text-xl font-semibold text-primary-100">Catalogo nao encontrado.</h2>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]
