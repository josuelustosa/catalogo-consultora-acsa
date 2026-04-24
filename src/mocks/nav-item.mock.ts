import type { NavItem } from "../types/nav-item.type"

export const NAV_ITEMS = [
  { id: 1, label: "Início", path: "/", kind: "home" },
  {
    id: 2,
    label: "o Boticário, Eudora & OUI",
    path: "/catalogo/boticario-eudora-e-oui",
    kind: "catalog",
    slug: "boticario-eudora-e-oui",
  },
  {
    id: 3,
    label: "Natura & Avon",
    path: "/catalogo/natura-e-avon",
    kind: "catalog",
    slug: "natura-e-avon",
  },
  {
    id: 4,
    label: "Romance & Favorita",
    path: "/catalogo/romance-e-favorita",
    kind: "catalog",
    slug: "romance-e-favorita",
  },
  {
    id: 5,
    label: "Moda Íntima",
    path: "/catalogo/moda-intima",
    kind: "catalog",
    slug: "moda-intima",
  },
] as const satisfies readonly NavItem[]

type AnyNavItem = (typeof NAV_ITEMS)[number]
type CatalogItem = Extract<AnyNavItem, { kind: "catalog" }>

export function isCatalogNavItem(item: AnyNavItem): item is CatalogItem {
  return item.kind === "catalog"
}

export const CATALOG_NAV_ITEMS = NAV_ITEMS.filter(isCatalogNavItem)

export type CatalogSlug = CatalogItem["slug"]
