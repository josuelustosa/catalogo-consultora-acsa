import type { CatalogData } from "../../types/catalog-data.type"

export const romanceFavoritaCatalog: CatalogData = {
  slug: "romance-e-favorita",
  title: "Romance e Favorita",
  subtitle: "Pecas populares e kits para pronta entrega.",
  updatedAt: "2026-04-23",
  sections: [
    {
      id: "lingerie",
      title: "Lingerie",
      items: [
        { id: "kit-luxo", name: "Kit Lingerie Luxo", price: "R$ 119,90" },
        { id: "conjunto-basic", name: "Conjunto Basico", price: "R$ 69,90" },
      ],
    },
    {
      id: "pijamas",
      title: "Pijamas",
      items: [
        { id: "pijama-fem", name: "Pijama Feminino Algodao", price: "R$ 89,90" },
        { id: "pijama-masc", name: "Pijama Masculino Viscose", price: "R$ 94,90" },
      ],
    },
  ],
}
