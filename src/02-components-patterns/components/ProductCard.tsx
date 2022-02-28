import { createContext } from "react";

import styles from "../styles/styles.module.css";
import useProducts from "../hooks/useProducts";
import { ProductCardProps, ContextProduct } from "../interfaces/Interfaces";

export const ProductContext = createContext({} as ContextProduct);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProducts();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
