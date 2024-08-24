import Button from "./button";
import styles from "./latest-properties.module.css";
import PropertyListing from "./bikini-listing";
import Title from "./title";

export default function LatestBikinis({ data, error, isLoading }) {
  return (
    <div className={styles.container}>
      <Title h2>Últimos modelos</Title>
      <PropertyListing data={data} error={error} isLoading={isLoading} />
      <Button href="/properties" lg center>
        Ver más
      </Button>
    </div>
  );
}
