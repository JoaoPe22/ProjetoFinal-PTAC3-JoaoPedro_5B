import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className={styles.loading}>
      <Image
        src="/90-ring.svg"
        width={100}
        height={100}
      ></Image>
    </main>
  );
}