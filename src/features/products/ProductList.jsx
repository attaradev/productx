import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  editProduct,
  deleteProduct,
  selectProducts,
} from "./productsSlice";

export function ProductList() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{JSON.stringify(product)}</div>
      ))}
    </div>
  );
}
