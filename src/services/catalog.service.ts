import { PRODUCTS } from "../data/products.mock";
import { getCatalogNavItemBySlug } from "../mocks/nav-item.mock";
import type { Product } from "../types/product.type";

export type CatalogBrandGroup = {
  brand: string;
  products: Product[];
};

export type CatalogView = {
  slug: string;
  title: string;
  brands: readonly string[];
  products: Product[];
};

/**
 * A planilha é editada à mão, então "boticário " e "Boticario" precisam casar.
 */
function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getProductsByBrands(brands: readonly string[]): Product[] {
  const wanted = new Set(brands.map(normalize));

  return PRODUCTS.filter((product) => wanted.has(normalize(product.brand)));
}

/** Agrupa por marca preservando a ordem de primeira aparição. */
export function groupByBrand(products: Product[]): CatalogBrandGroup[] {
  const groups: CatalogBrandGroup[] = [];
  const indexByBrand = new Map<string, number>();

  for (const product of products) {
    const key = normalize(product.brand);
    const index = indexByBrand.get(key);

    if (index === undefined) {
      indexByBrand.set(key, groups.length);
      groups.push({ brand: product.brand, products: [product] });
      continue;
    }

    groups[index].products.push(product);
  }

  return groups;
}

/**
 * Orquestra a regra de negócio do catálogo:
 * slug -> item do menu -> marcas do grupo -> produtos daquelas marcas.
 */
export function getCatalogBySlug(slug: string): CatalogView | null {
  const navItem = getCatalogNavItemBySlug(slug);

  if (!navItem) {
    return null;
  }

  return {
    slug: navItem.slug,
    title: navItem.label,
    brands: navItem.brands,
    products: getProductsByBrands(navItem.brands),
  };
}
