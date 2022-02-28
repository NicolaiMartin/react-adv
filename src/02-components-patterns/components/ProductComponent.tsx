import ProductCard, { ProductButtoms, ProductImg, ProductTitle } from ".";

import { products } from "../data/Products";

const ProductComponent = ({ productos, event }: any) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {products.map((prod) => (
      <ProductCard
        key={prod.id}
        product={prod}
        onChange={event}
        value={productos[prod.id]?.count ?? 0}
      >
        <ProductImg />
        <ProductTitle />
        <ProductButtoms />
      </ProductCard>
    ))}
  </div>
);

export default ProductComponent;
