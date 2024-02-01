import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const result = "Hii".concat(id);
  return (
    <div>
      <h1>Product Id is : {result} </h1>
      <h1>Hello From Products</h1>
    </div>
  );
}
