import { Outlet } from "react-router"

function Catalog() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-8">
      <header className="mb-8 border-b border-primary-700 pb-4">
        <h1 className="text-2xl font-bold text-primary-900">Catalogos</h1>
        <p className="mt-2 text-sm text-primary-900/80">
          Selecione um catalogo no menu para visualizar as secoes e produtos.
        </p>
      </header>

      <Outlet />
    </section>
  )
}

export default Catalog
