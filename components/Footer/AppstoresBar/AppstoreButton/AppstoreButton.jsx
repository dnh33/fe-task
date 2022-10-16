import Link from "next/link";
import Image from "next/image";
import styles from "./AppstoreButton.module.scss";

const AppstoreButton = ({ children, url, src, alt }) => {
  return (
    <Link href={url}>
      <button className={styles.button}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image src={src} alt={alt} width={56} height={52} />
          </div>
          <div className={styles.textbox}>
            <p className={styles.small}>available in the</p>
            <p className={styles.bold}>{children} store</p>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default AppstoreButton;
