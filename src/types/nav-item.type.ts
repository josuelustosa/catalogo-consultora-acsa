export type HomeNavItem = {
  id: number
  label: string
  path: "/"
  kind: "home"
}

export type CatalogNavItem = {
  id: number
  label: string
  path: `/catalogo/${string}`
  kind: "catalog"
  slug: string
}

export type NavItem = HomeNavItem | CatalogNavItem
