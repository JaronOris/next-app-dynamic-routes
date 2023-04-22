import "../styles/globals.css";
import Link from "next/link";
import NavbarStyle from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import HeroStyles from "../styles/Hero.module.css";
import FooterStyles from "../styles/Footer.module.css";
import ModalStyles from "../styles/Modal.module.css";
import Modal from "../components/Modal.js"

export default function App({ Component, pageProps }) {
  const router = useRouter();

  function getLinkClassName(path) {
    if (router.pathname === path) {
      return NavbarStyle.linkActive;
    } else {
      return NavbarStyle.linkInactive;
    }
  }

  const homeClassName = getLinkClassName("/");
  const aboutClassName = getLinkClassName("/about");
  const productClassName = getLinkClassName("/products");

  return (
    <>
      <nav className={NavbarStyle.navbar}>
        <ul>
          <li>
            <Link href="/" className={homeClassName}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={aboutClassName}>
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className={productClassName}>
              Products
            </Link>
          </li>
        </ul>
        <span className={NavbarStyle.logo}>The Soap Factory</span>
      </nav>
      <header className={HeroStyles.hero}></header>

      <Component {...pageProps} />

      <footer className={FooterStyles.soapFooter}>
        <div>The Soap Factory</div>
        <div className={ModalStyles.clickable}>
          <Modal trigger="Terms and Conditions">
            List of Terms and Conditions for user
          </Modal>
         </div>
      </footer>
    </>
  );
}
