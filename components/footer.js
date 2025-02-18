import styles from "./footer.module.css";
import Link from "next/link";
import Logo from "./logo";

const purposes = [
  {
    title: "Polos",
    path: "/properties",
  },
  // {
  //   title: "Venta",
  //   path: "/sale",
  // },
  // {
  //   title: "Renta",
  //   path: "/rent",
  // },
];

const types = [
  // {
  //   title: "Departamentos",
  //   path: "/departments",
  // },
  // {
  //   title: "Casas",
  //   path: "/houses",
  // },
  // {
  //   title: "Oficinas",
  //   path: "/offices",
  // },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles["top-section"]}>
          <div className={styles.nav}>
            <Logo />
          </div>
          <div className={styles.nav}>
            {purposes.map(({ title, path }) => (
              <Link key={path} href={path}>
                <span>
                  <a className={styles["nav-item"]}>{title}</a>
                </span>
              </Link>
            ))}
          </div>
          <div className={styles.nav}>
            {types.map(({ title, path }) => (
              <Link key={path} href={path}>
                <span>
                  <a className={styles["nav-item"]}>{title}</a>
                </span>
              </Link>
            ))}
          </div>
          <div className={styles.newsletter}>
            <p className={styles.title}>Suscríbase al boletín de noticias</p>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Correo electrónico"
                className={styles.input}
              />
              <span className={styles.button}>Suscribirse</span>
            </form>
          </div>
        </div>

        <div className={styles["bottom-section"]}>
          <div>
            <p>
              © {new Date().getFullYear()} Mizu. Todos los derechos
              reservados.
            </p>
          </div>
   
        </div>
      </div>
    </footer>
  );
}
