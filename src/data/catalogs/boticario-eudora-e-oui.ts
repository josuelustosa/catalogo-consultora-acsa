import type { CatalogData } from "../../types/catalog-data.type"

export const boticarioEudoraOuiCatalog: CatalogData = {
  slug: "boticario-eudora-e-oui",
  title: "o Boticario, Eudora e OUI",
  subtitle: "Fragrancias e cuidados pessoais das marcas do grupo.",
  updatedAt: "2026-04-23",
  sections: [
    {
      id: "perfumaria",
      title: "Perfumaria",
      description: "Sugestoes de saida rapida para atendimento.",
      items: [
        { id: "malbec", name: "Malbec Desodorante Colonia", price: "R$ 149,90" },
        { id: "lily", name: "Lily Eau de Parfum", price: "R$ 199,90" },
        { id: "imensi", name: "Eudora Imensi", price: "R$ 139,90" },
      ],
    },
    {
      id: "hidratacao",
      title: "Hidratacao",
      items: [
        { id: "nativa-spa", name: "Nativa SPA Ameixa", price: "R$ 74,90" },
        { id: "instance", name: "Eudora Instance Cereja", price: "R$ 49,90" },
      ],
    },
  ],
}
