export type HomeNavItem = {
  id: number;
  label: string;
  path: "/";
  kind: "home";
};

export type CatalogNavItem = {
  id: number;
  label: string;
  path: `/catalogo/${string}`;
  kind: "catalog";
  slug: string;
  /** Marcas da planilha que este item do menu agrupa. */
  brands: readonly string[];
};

export type NavItem = HomeNavItem | CatalogNavItem;
