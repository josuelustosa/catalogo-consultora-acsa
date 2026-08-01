import { useParams } from "react-router";

import Container from "../../components/Container";
import { getCatalogBySlug } from "../../services/catalog.service";
import CatalogGrid from "./CatalogGrid";
import CatalogHeader from "./CatalogHeader";

function Catalog() {
  const { slug = "" } = useParams<{ slug: string }>();
  const catalog = getCatalogBySlug(slug);

  if (!catalog) {
    return (
      <Container>
        <p className="py-12 text-center text-text-secondary">
          Catálogo não encontrado.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <CatalogHeader title={catalog.title} />

      {catalog.products.length === 0 ? (
        <p className="py-12 text-center text-text-secondary">
          Nenhum produto disponível neste catálogo no momento.
        </p>
      ) : (
        <>
          <CatalogGrid products={catalog.products} />

          <p className="mt-8 text-xs text-text-secondary">
            Exibindo <strong>{catalog.products.length}</strong>{" "}
            {catalog.products.length === 1 ? "produto" : "produtos"}.
          </p>
        </>
      )}
    </Container>
  );
}

export default Catalog;
