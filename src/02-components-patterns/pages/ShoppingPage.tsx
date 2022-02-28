import {
  ProductCard,
  ProductButtoms,
  ProductImg,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

import useShoppingCart from "../hooks/useShoppingCart";
import ProductComponent from "../components/ProductComponent";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCartChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <ProductComponent productos={shoppingCart} event={onProductCartChange} />

      <div className="shopping-card">
        {Object.entries(shoppingCart).map(([key, producto]) => (
          <ProductCard
            key={key}
            style={{ width: "200px" }}
            product={producto}
            value={producto.count}
            onChange={onProductCartChange}
          >
            <ProductImg />
            <ProductTitle />
            <ProductButtoms />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
