import styles from "./Title.module.scss";

export default function title({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}
