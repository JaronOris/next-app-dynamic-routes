import React from "react";
import AboutProductStyle from "../styles/AboutProduct.module.css";
import Link from "next/link";
import Image from "next/image";

function List({ children }) {
  return (
    <>
      <section className={AboutProductStyle.test}>{children}</section>
    </>
  );
}

export function ListItem({ image, header, text, href }) {
  if (href) {
    return (
      <>
        <div className={AboutProductStyle.ownerProduct}>
          <Link href={href} className={AboutProductStyle.left}>
            <Image src={image} />
          </Link>
          <div className={AboutProductStyle.right}>
            <Link href={href}>
              <h2>{header}:</h2>
            </Link>
            <p>{text}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={AboutProductStyle.ownerProduct}>
        <div className={AboutProductStyle.left}>
          <Image src={image} />
        </div>
        <div className={AboutProductStyle.right}>
          <h2>{header}:</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default List;
