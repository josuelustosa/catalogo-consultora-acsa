export type CatalogItem = {
  id: string
  name: string
  price: string
  note?: string
}

export type CatalogSection = {
  id: string
  title: string
  description?: string
  items: CatalogItem[]
}

export type CatalogData = {
  slug: string
  title: string
  subtitle: string
  updatedAt: string
  sections: CatalogSection[]
}
