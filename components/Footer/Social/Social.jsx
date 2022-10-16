import Title from "../Title";
import Icons from "./Icons/Icons";
import styles from "./Social.module.scss";

const Social = () => {
  return (
    <div className={styles.container}>
      <Title>social</Title>
      <Icons />
    </div>
  );
};

export default Social;
