import Image from "next/image";
import styles from "./BoxItem.module.scss";

const BotItem = ({ src, alt, title, headline, text, width, height }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.heading}>{headline}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default BotItem;
