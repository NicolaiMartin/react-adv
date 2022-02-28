import { useContext } from "react";

import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export const ProductImg = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgContains = product?.img ?? noImage;

  if (img !== "") {
    imgContains = img;
  }

  return <img className={styles.productImg} src={imgContains} alt="product" />;
};
