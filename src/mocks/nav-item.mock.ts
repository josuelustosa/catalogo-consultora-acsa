import type { NavItem } from "../types/nav-item.type";

export const NAV_ITEMS = [
  { id: 1, label: "Início", path: "/", kind: "home" },
  {
    id: 2,
    label: "o Boticário, Eudora & OUI",
    path: "/catalogo/boticario-eudora-e-oui",
    kind: "catalog",
    slug: "boticario-eudora-e-oui",
    brands: ["Boticário", "Eudora", "OUI"],
  },
  {
    id: 3,
    label: "Natura & Avon",
    path: "/catalogo/natura-e-avon",
    kind: "catalog",
    slug: "natura-e-avon",
    brands: ["Natura", "Avon"],
  },
  {
    id: 4,
    label: "Romance & Favorita",
    path: "/catalogo/romance-e-favorita",
    kind: "catalog",
    slug: "romance-e-favorita",
    brands: ["Romance", "Favorita"],
  },
  {
    id: 5,
    label: "Moda Íntima",
    path: "/catalogo/moda-intima",
    kind: "catalog",
    slug: "moda-intima",
    brands: ["Moda Íntima"],
  },
  {
    id: 6,
    label: "Joias & Acessórios",
    path: "/catalogo/joias-e-acessorios",
    kind: "catalog",
    slug: "joias-e-acessorios",
    brands: ["Joias", "Acessórios"],
  },
] as const satisfies readonly NavItem[];

type AnyNavItem = (typeof NAV_ITEMS)[number];
type CatalogItem = Extract<AnyNavItem, { kind: "catalog" }>;

export function isCatalogNavItem(item: AnyNavItem): item is CatalogItem {
  return item.kind === "catalog";
}

export const CATALOG_NAV_ITEMS = NAV_ITEMS.filter(isCatalogNavItem);

export function getCatalogNavItemBySlug(slug: string): CatalogItem | undefined {
  return CATALOG_NAV_ITEMS.find((item) => item.slug === slug);
}

export type CatalogSlug = CatalogItem["slug"];
