import tallaIcon from "@/public/area-icon.png";
import bathIcon from "@/public/bath-icon.png";
import bedIcon from "@/public/bed-icon.png";
import elevatorIcon from "@/public/elevator-icon.png";
import location from "@/public/location.png";
import parkingIcon from "@/public/parking-icon.png";
import securityIcon from "@/public/security-icon.png";
import Image from "next/image";
import Faq from "./faq";
import { Gallery } from "./gallery";
import PropertyContact from "./property-contact";
import styles from "./property-info.module.css";
import PropertyLocation from "./property-location";
import Title from "./title";

export default function PropertyInfo({ data }) {
  const {
    title,
    images,
    color,
    price,
    area,
    bedrooms,
    bathrooms,
    parking,
    elevator,
    security,
    status,
    type,
    description,
    delivery,
    amenities,
  } = data;

  const translatedStatus = (status) => {
    switch (status) {
      case "sale":
        return "venta";
      case "ofert":
        return "oferta";
      default:
    }
  };

  const translatedType = (type) => {
    switch (type) {
      case "department":
        return "Departamento";
      case "house":
        return "Casa";
      case "office":
        return "Oficina";
      default:
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["property-container"]}>
        <div className={styles["gallery-container"]}>
          <Gallery images={images} />
        </div>

        <div className={styles["main-container"]}>
          <div className={styles["title-container"]}>
            <Title h1>{title}</Title>
            {/* <p className={styles.subtitle}>{`${translatedType(
              type
            )} en ${translatedStatus(status)}`}</p> */}
            <PropertyLocation color={color} />
          </div>
          <div className={styles["price-container"]}>
            <p className={styles.price}>S/.{price} SOL</p>
            <p className={styles.delivery}>
              Delivery todo el Perú <strong>{delivery}</strong>
            </p>
          </div>
        </div>

        <div className={styles["secondary-container"]}>
          <h2 className={styles.subtitle}>Características</h2>
          <div className={styles.badges}>
            <div className={styles.badge}>Talla:</div>
            <div className={styles.badge}>M</div>
            <div className={styles.badge}>L</div>
            {bedrooms && (
              <div className={styles.badge}>
                <div className={styles.icon}>
                  <Image src={bedIcon} alt="bed" layout="fill" />
                </div>
                <span>{bedrooms} rec.</span>
              </div>
            )}
            {bathrooms && (
              <div className={styles.badge}>
                <div className={styles.icon}>
                  <Image src={bathIcon} alt="bath" layout="fill" />
                </div>
                <span>{`${bathrooms} ${
                  bathrooms < 2 ? "baño" : "baños"
                }`}</span>
              </div>
            )}
            {parking && (
              <div className={styles.badge}>
                <div className={styles.icon}>
                  <Image src={parkingIcon} alt="parking" layout="fill" />
                </div>
                <span>{parking} estac.</span>
              </div>
            )}
            {elevator && (
              <div className={styles.badge}>
                <div className={styles.icon}>
                  <Image src={elevatorIcon} alt="parking" layout="fill" />
                </div>
                <span>Elevador</span>
              </div>
            )}
            {security && (
              <div className={styles.badge}>
                <div className={styles.icon}>
                  <Image src={securityIcon} alt="parking" layout="fill" />
                </div>
                <span>Seguridad 24/7</span>
              </div>
            )}
          </div>
        </div>

        <div className={styles["secondary-container"]}>
          <h2 className={styles.subtitle}>Descripción</h2>
          <p className={styles.description}>
            {description.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </p>
        </div>

        {/* <div className={styles["secondary-container"]}>
          <h2 className={styles.subtitle}>Amenidades</h2>
          <div className={styles.amenities}>
            {amenities.map((amenity, index) => (
              <span key={index} className={styles.amenity}>
                {amenity}
              </span>
            ))}
          </div>
        </div> */}

        <div className={styles["secondary-container"]}>
          <h2 className={styles.subtitle}>Ubicación</h2>
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",
              position: "relative",
            }}
          >
            <Image
              src={location}
              alt=""
              layout="fill"
              style={{ borderRadius: "1rem" }}
            />
          </div>
        </div>

        <div className={styles["secondary-container"]}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>
          <Faq />
        </div>

        {/* <div className={styles["secondary-container"]}>
          <p className={styles.disclaimer}>
            * Los precios están sujetos a cambios sin previo aviso. El
            propietario del sitio web no garantiza que los precios mostrados en
            el sitio web sean los más actuales.
          </p>
          <p className={styles.disclaimer}>
            ** La fecha de entrega del inmueble es sólo una estimación y está
            sujeta a cambios. El propietario del sitio web no garantiza que la
            fecha de entrega mostrada en el sitio web sea la más actual.
          </p>
        </div> */}
      </div>

      <PropertyContact
        {...data}
        translatedType={translatedType}
        translatedStatus={translatedStatus}
      />
    </div>
  );
}
