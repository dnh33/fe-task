import Title from "../Title";
import List from "./List/List";

import styles from "./Quicklinks.module.scss";

const Quicklinks = () => {
  return (
    <div className={styles.wrapper}>
      <Title>quick links</Title>
      <List />
    </div>
  );
};

export default Quicklinks;
