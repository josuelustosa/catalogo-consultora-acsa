import type { CatalogData } from "../types/catalog-data.type"

type CatalogPageProps = {
  data: CatalogData
}

function CatalogPage({ data }: CatalogPageProps) {
  return (
    <article className="space-y-6">
      <header className="rounded-xl border border-primary-700 p-4">
        <h2 className="text-xl font-semibold text-primary-900">{data.title}</h2>
        <p className="mt-1 text-sm text-primary-900/80">{data.subtitle}</p>
        <p className="mt-2 text-xs text-primary-900/70">Atualizado em: {data.updatedAt}</p>
      </header>

      {data.sections.map((section) => (
        <section key={section.id} className="rounded-xl border border-primary-700 p-4">
          <h3 className="text-lg font-semibold text-primary-900">{section.title}</h3>

          {section.description ? (
            <p className="mt-1 text-sm text-primary-900/80">{section.description}</p>
          ) : null}

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {section.items.map((item) => (
              <li key={item.id} className="rounded-lg border border-primary-700/70 p-3">
                <p className="font-medium text-primary-900">{item.name}</p>
                <p className="text-sm text-primary-900/80">{item.price}</p>

                {item.note ? <p className="mt-1 text-xs text-primary-900/70">{item.note}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  )
}

export default CatalogPage
