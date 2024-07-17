import Image from "next/image";
import styles from "./viagem.module.css";
export default async function Viagem({ params }) {
  const response = await fetch("http://localhost:3000/api/" + params.id);
  const data = await response.json();
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {
          <Image
            src={data.imagem}
            width={350}
            height={200}
            alt="imagem de produto"
            className={styles.Image}
          ></Image>
        }
      </div>

      <div className={styles.textContainer}>
        <h3 className={styles.title}>{data.lugar}</h3>
        <p className={styles.country}>{data.pais}</p>
        <h2 className={styles.price}>R${data.preco}</h2>
        <p className={styles.type}>{data.tipo}</p>
      </div>
    </div>
  );
}
