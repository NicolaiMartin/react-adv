import {
  ProductCard,
  ProductButtoms,
  ProductImg,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffee Mug",
};

export const ShoppingPage = () => (
  <div>
    <h1>Shopping store</h1>
    <hr />

    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ProductCard product={product}>
        <ProductImg />
        <ProductTitle />
        <ProductButtoms />
      </ProductCard>

      <ProductCard product={product}>
        <ProductCard.Img />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </ProductCard>
    </div>
  </div>
);
