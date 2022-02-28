import { useState } from "react";
import { Products } from "../interfaces/Interfaces";

interface ProductCart extends Products {
  count: number;
}

interface ShoppingCartArgs {
  count: number;
  product: Products;
}

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductCart;
  }>({});

  const onProductCartChange = ({ count, product }: ShoppingCartArgs) => {
    setShoppingCart((oldProduct) => {
      const productInCart: ProductCart = oldProduct[product.id] ?? {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldProduct,
          [product.id]: { ...product, count },
        };
      }

      const { [product.id]: toDelete, ...rest } = oldProduct;
      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCartChange,
  };
};

export default useShoppingCart;
