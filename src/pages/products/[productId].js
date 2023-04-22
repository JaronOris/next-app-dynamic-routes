import React from "react";
import ProductDetails from "../../styles/ProductDetails.module.css";
import { products } from "../data/productsData";
import { useRouter } from "next/router";

export default function ProductViewPage() {
  const router = useRouter();
  const { productId } = router.query;

  const currentProduct = products.find((product) => product.id === productId);

  if (!currentProduct) {
    return (
      <>
        <h1>Sorry, We couldn't find that product.</h1>
      </>
    );
  }

  return (
    <>
      <div className={ProductDetails.container}>
        <img
          className={ProductDetails.productImage}
          src={`/images/${currentProduct.image}`}
        />
        <div className={ProductDetails.info}>
          <h1 className={ProductDetails.name}>{currentProduct.name}:</h1>
          <p className={ProductDetails.descBox}>{currentProduct.description}</p>
        </div>
      </div>
    </>
  );
}
