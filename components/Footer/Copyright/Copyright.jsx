import styles from "./Copyright.module.scss";

const Copyright = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default Copyright;
