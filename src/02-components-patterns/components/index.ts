import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtoms } from "./ProductButtons";
import { ProductImg } from "./ProductImages";
import { ProductTitle } from "./ProductTitle";

export { ProductButtoms } from "./ProductButtons";
export { ProductImg } from "./ProductImages";
export { ProductTitle } from "./ProductTitle";

export const ProductCard = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Img: ProductImg,
  Buttons: ProductButtoms,
});

export default ProductCard;
