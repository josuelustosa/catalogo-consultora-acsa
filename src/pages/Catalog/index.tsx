import { useMemo, useState } from "react";
import { useParams } from "react-router";

import Container from "../../components/Container";
import { useDebouncedValue } from "../../hooks/use-debounced-value";
import {
  getCatalogBySlug,
  searchProducts,
} from "../../services/catalog.service";
import CatalogGrid from "./CatalogGrid";
import CatalogHeader from "./CatalogHeader";

type CatalogContentProps = {
  slug: string;
};

function CatalogContent({ slug }: CatalogContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm);

  const catalog = useMemo(() => getCatalogBySlug(slug), [slug]);

  const products = useMemo(
    () =>
      catalog ? searchProducts(catalog.products, debouncedSearchTerm) : [],
    [catalog, debouncedSearchTerm],
  );

  if (!catalog) {
    return (
      <Container>
        <p className="py-12 text-center text-text-secondary">
          Catálogo não encontrado.
        </p>
      </Container>
    );
  }

  const isEmptyCatalog = catalog.products.length === 0;
  const isSearching = debouncedSearchTerm.trim().length > 0;

  return (
    <Container>
      <CatalogHeader
        title={catalog.title}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />

      {isEmptyCatalog ? (
        <p className="py-12 text-center text-text-secondary">
          Nenhum produto disponível neste catálogo no momento.
        </p>
      ) : products.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-12">
          <p className="text-center text-text-secondary">
            Nenhum produto encontrado para{" "}
            <strong className="text-text">{debouncedSearchTerm}</strong>.
          </p>

          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-text-brand transition-all hover:bg-surface-soft active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Limpar busca
          </button>
        </div>
      ) : (
        <>
          <CatalogGrid products={products} />

          <p className="mt-8 text-xs text-text-secondary">
            Exibindo <strong>{products.length}</strong>
            {isSearching ? ` de ${catalog.products.length}` : ""}{" "}
            {products.length === 1 ? "produto" : "produtos"}.
          </p>
        </>
      )}
    </Container>
  );
}

function Catalog() {
  const { slug = "" } = useParams<{ slug: string }>();

  return <CatalogContent key={slug} slug={slug} />;
}

export default Catalog;
