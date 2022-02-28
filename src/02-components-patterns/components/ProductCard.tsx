import { createContext, ReactElement } from "react";

import styles from "../styles/styles.module.css";
import useProducts from "../hooks/useProducts";
import {
  ContextProduct,
  onChangeArgs,
  Products,
} from "../interfaces/Interfaces";

interface ProductCardProps {
  product: Products;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ContextProduct);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  value,
  onChange,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProducts({ onChange, product, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
