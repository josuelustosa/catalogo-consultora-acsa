import type { CatalogData } from "../../types/catalog-data.type"

export const modaIntimaCatalog: CatalogData = {
  slug: "moda-intima",
  title: "Moda Intima",
  subtitle: "Colecao com foco em conforto e giro rapido.",
  updatedAt: "2026-04-23",
  sections: [
    {
      id: "sutias",
      title: "Sutias",
      items: [
        { id: "sutia-renda", name: "Sutia Renda Reforcado", price: "R$ 59,90" },
        { id: "sutia-top", name: "Sutia Top Sem Costura", price: "R$ 49,90" },
      ],
    },
    {
      id: "calcinhas",
      title: "Calcinhas",
      items: [
        { id: "calcinha-cotton", name: "Calcinha Cotton", price: "R$ 19,90" },
        { id: "calcinha-fio", name: "Calcinha Fio Duplo", price: "R$ 24,90" },
      ],
    },
  ],
}
