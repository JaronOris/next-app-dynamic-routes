import React from "react";
import AboutProductStyle from "../styles/AboutProduct.module.css";
import Image from "next/image";

import List, { ListItem } from "../components/list";
import { products } from "../data/productsData.js";

export default function ProductsPage() {
  const soapList = products.map((product) => {
    return (
      <ListItem
        key={product.id}
        header={product.name}
        image={`/images/${product.image}`}
        text={product.description}
        href={`/products/${product.id}`}
      />
    );
  });

  return (
    <>
      <section className={AboutProductStyle.contentProducts}>
        <div className={AboutProductStyle.contentCenter}>
          <List>{soapList}</List>
        </div>
      </section>
    </>
  );
}
