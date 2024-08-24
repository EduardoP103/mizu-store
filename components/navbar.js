import menuIcon from "@/public/menu-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";
import styles from "./navbar.module.css";

// navbar horizontal
const menu = [
  {
    title: "Polos",
    path: "/properties",
  },
  {
    title: "Poleras",
    path: "/",
    // path: "/departments",
  },
  {
    title: "Bikinis",
    path: "/",
    // path: "/houses",
  },
  {
    title: "Casacas",
    path: "/",
    // path: "/offices",
  },
  // {
  //   title: "Venta",
  //   path: "/sale",
  // },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((isOpen) => !isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <header className={styles.container}>
        <nav className={styles.navbar}>
          <Logo />

          <div onClick={handleOpen} className={styles["menu-icon"]}>
            <Image src={menuIcon} alt="" layout="fill" />
          </div>

          <nav className={styles.nav}>
            {menu.map(({ title, path }) => (
              <Link key={path} href={path}>
                <a className={styles["nav-item"]}>{title}</a>
              </Link>
            ))}
          </nav>
        </nav>
      </header>

      {isOpen && (
        <div className={styles["mobile-nav"]}>
          {menu.map(({ title, path }) => (
            <Link key={path} href={path}>
              <a onClick={handleClose} className={styles["mobile-nav-item"]}>
                {title}
              </a>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
