import type { CatalogData } from "../../types/catalog-data.type"

export const naturaAvonCatalog: CatalogData = {
  slug: "natura-e-avon",
  title: "Natura e Avon",
  subtitle: "Linha de perfumaria, corpo e maquiagem.",
  updatedAt: "2026-04-23",
  sections: [
    {
      id: "feminino",
      title: "Perfumaria Feminina",
      items: [
        { id: "kaiak-fem", name: "Kaiak Feminino", price: "R$ 139,90" },
        { id: "far-away", name: "Far Away Avon", price: "R$ 89,90" },
      ],
    },
    {
      id: "maquiagem",
      title: "Maquiagem",
      items: [
        { id: "una-base", name: "Base UNA", price: "R$ 87,90" },
        { id: "power-stay", name: "Power Stay Batom", price: "R$ 34,90" },
      ],
    },
  ],
}
