import type { CatalogSlug } from "../../mocks/nav-item.mock"
import type { CatalogData } from "../../types/catalog-data.type"

import { boticarioEudoraOuiCatalog } from "./boticario-eudora-e-oui"
import { modaIntimaCatalog } from "./moda-intima"
import { naturaAvonCatalog } from "./natura-e-avon"
import { romanceFavoritaCatalog } from "./romance-e-favorita"

export const catalogDataBySlug: Record<CatalogSlug, CatalogData> = {
  "boticario-eudora-e-oui": boticarioEudoraOuiCatalog,
  "natura-e-avon": naturaAvonCatalog,
  "romance-e-favorita": romanceFavoritaCatalog,
  "moda-intima": modaIntimaCatalog,
}

export function getCatalogDataBySlug(slug: string): CatalogData | null {
  if (slug in catalogDataBySlug) {
    return catalogDataBySlug[slug as CatalogSlug]
  }

  return null
}
