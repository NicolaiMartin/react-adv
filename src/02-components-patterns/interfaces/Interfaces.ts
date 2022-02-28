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

export interface onChangeArgs {
  product: Products;
  count: number;
}
