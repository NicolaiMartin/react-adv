import { useContext } from "react";

import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

interface ImgProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImg = ({ img = "", className, style }: ImgProps) => {
  const { product } = useContext(ProductContext);
  let imgContains = product?.img ?? noImage;

  if (img !== "") {
    imgContains = img;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgContains}
      alt="product"
      style={style}
    />
  );
};
