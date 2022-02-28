import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

interface TitleProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: TitleProps) => {
  const { product } = useContext(ProductContext);
  let existTitle = product.title === "" ? "Sin título" : product.title;

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ?? existTitle}
    </span>
  );
};
