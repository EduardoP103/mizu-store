import Image from "next/image";
import Button from "./button";
import styles from "./features.module.css";
import Paragraph from "./paragraph";
import Title from "./title";

const features = [
  {
    title: "Busca tu bikini favorita en Mizu",
    description:
      "Con nuestra increíble selección de casas, encuentra la que más te guste.",
    image: "/looking-property.jpg",
  },
  {
    title: "segundo bikini",
    description: "",
    image: "/visiting-property.jpg",
  },
  { title: "tercer bikini", description: "", image: "/property-purchased.jpg" },
];

export default function Features() {
  return (
    <div className={styles.container}>
      <Title h2>Encontrar la prenda ideal es muy fácil</Title>
      <div className={styles.features}>
        {features.map(({ title, description, image }, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles["image-container"]}>
              <Image
                src={image}
                alt=""
                layout="fill"
                className={styles.image}
              />
            </div>
            <h3 className={styles.subtitle}>{title}</h3>
            <Paragraph>{description}</Paragraph>
          </div>
        ))}
      </div>
      <Button href="/properties" lg>
        Comenzar a explorar
      </Button>
    </div>
  );
}
