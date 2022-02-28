import { ReactElement } from "react";

export interface ProductCardProps {
  product: Products;
  children?: ReactElement | ReactElement[];
}

export interface Products {
  id: string;
  title: string;
  img?: string;
}

export interface ContextProduct {
  counter: number;
  increaseBy: (value: number) => void;
  product: Products;
}
