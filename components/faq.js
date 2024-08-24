import styles from './faq.module.css';

const faqs = [
  {
    question: '¿Cómo puedo comprar un polo?',
    answer:
      'Es muy sencillo. Elige el polo que te gusta y contáctanos a través de WhatsApp para confirmar la disponibilidad. Luego, te enviaremos los detalles para el pago y la entrega.',
  },
  {
    question: '¿Cuáles son los métodos de pago disponibles?',
    answer:
      'Puedes realizar el pago mediante transferencia bancaria a nuestras cuentas en BCP o BBVA. Los números de cuenta son: BCP: 0011010000 y BBVA: 0011010000.',
  },
  {
    question: '¿Cuánto tiempo tarda en llegar mi pedido?',
    answer:
      'El tiempo de entrega depende de tu ubicación. Ofrecemos delivery gratuito en todo Huacho, y los pedidos se entregan generalmente en un plazo de 2 a 5 días hábiles. Para otras zonas, consulta con nosotros.',
  },
  {
    question: '¿Puedo cambiar o devolver un polo?',
    answer:
      'Sí, aceptamos cambios y devoluciones dentro de los 7 días posteriores a la entrega, siempre que el polo esté en perfectas condiciones. Contáctanos por WhatsApp para gestionar el proceso.',
  },
];

export default function Faq() {
  return (
    <div className={styles.container}>
      {faqs.map(({ question, answer }) => (
        <div key={question} className={styles.faq}>
          <h3 className={styles.title}>{question}</h3>
          <p className={styles.paragraph}>{answer}</p>
        </div>
      ))}
    </div>
  );
}
