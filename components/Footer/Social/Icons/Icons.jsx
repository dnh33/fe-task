import Icon from "./Icon/Icon";
import styles from "./Icons.module.scss";

const Icons = () => {
  return (
    <div className={styles.container}>
      <Icon href="/insta" src="/instagram.svg" alt="visit our instagram" />
      <Icon href="/fb" src="/facebook.svg" alt="visit our facebook page" />
      <Icon href="/lb" src="/linkedin.svg" alt="visit our linkedin page" />
      <Icon href="/d" src="/twitter.svg" alt="visit our twitter page" />
      <Icon href="/d" src="/tiktok.svg" alt="visit our tiktok page" />
    </div>
  );
};

export default Icons;
