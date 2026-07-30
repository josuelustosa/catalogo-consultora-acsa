import type { CatalogSlug } from "../../mocks/nav-item.mock"
import type { CatalogData } from "../../types/catalog-data.type"

import { boticarioEudoraOuiCatalog } from "./boticario-eudora-e-oui"
import { modaIntimaCatalog } from "./moda-intima"
import { naturaAvonCatalog } from "./natura-e-avon"
import { romanceFavoritaCatalog } from "./romance-e-favorita"
import { joiasAcessoriosCatalog } from "./joias-e-acessorios" 

export const catalogDataBySlug: Record<CatalogSlug, CatalogData> = {
  "boticario-eudora-e-oui": boticarioEudoraOuiCatalog,
  "natura-e-avon": naturaAvonCatalog,
  "romance-e-favorita": romanceFavoritaCatalog,
  "moda-intima": modaIntimaCatalog,
  "joias-e-acessorios": joiasAcessoriosCatalog,
}

export function getCatalogDataBySlug(slug: string): CatalogData | null {
  if (slug in catalogDataBySlug) {
    return catalogDataBySlug[slug as CatalogSlug]
  }

  return null
}
