import type { Product } from "../../types/product.type";
import CatalogCard from "./CatalogCard";

type CatalogGridProps = {
  products: Product[];
};

function CatalogGrid({ products }: CatalogGridProps) {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {products.map((product) => (
        <li key={product.id}>
          <CatalogCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default CatalogGrid;
