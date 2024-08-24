import Link from 'next/link';
import styles from './property-contact.module.css';
import PropertyLocation from './property-location';
import whatsappIcon from '@/public/whatsapp-icon.png';
import Image from 'next/image';

export default function PropertyContact({
  title,
  color,
  price,
  type,
  status,
  translatedType,
  translatedStatus,
}) {
  // Función para obtener el saludo según la hora del día
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Buenos días';
    } else if (currentHour < 18) {
      return 'Buenas tardes';
    } else {
      return 'Buenas noches';
    }
  };

  const whatsappMessage = `${getGreeting()}, quisiera saber si está disponible el ${title} de ${color}.`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{`${type} en ${translatedStatus(status)}`}</p>
        <PropertyLocation color={color} />
      </div>
      <p className={styles.price}>Desde S/.{price} SOL</p>
      <Link href={`https://wa.me/51986652873?text=${encodedMessage}`} passHref>
        <a className={styles['button-contact']} target="_blank" rel="noopener noreferrer">
          <div className={styles.icon}>
            <Image src={whatsappIcon} alt="Icono de WhatsApp" layout="fill" />
          </div>
          Contáctanos
        </a>
      </Link>
    </div>
  );
}
