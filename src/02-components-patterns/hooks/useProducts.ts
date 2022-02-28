import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Products } from "../interfaces/Interfaces";

interface useProductArgs {
  product: Products;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

const useProducts = ({ onChange, product, value = 0 }: useProductArgs) => {
  const [counter, setcounter] = useState(value);

  const isControlled = useRef(!!onchange);

  useEffect(() => {
    setcounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    if (isControlled) return onChange!({ count: value, product });

    const newValue = Math.max(counter + value, 0);

    setcounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  return { counter, increaseBy };
};

export default useProducts;
