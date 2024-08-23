import Image from "next/image";
import Button from "./button";
import styles from "./hero.module.css";
import Paragraph from "./paragraph";
import Title from "./title";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles["info-container"]}>
          <Title h1>¡Encuentra hoy tu preda soñada!</Title>
          <Paragraph lg>
            Con nuestra gran selección de prendas, seguro que encontrarás la
            perfecta para ti. Empieza tu búsqueda hoy mismo.
          </Paragraph>
          <Button href="/properties" lg>
            Descubre nuestros polos
          </Button>
        </div>
        <div className={styles["image-container"]}>
          <Image
            src={"/mizu.jpg"}
            alt=""
            layout="fill"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
