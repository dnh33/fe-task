import Title from "../Title";

import styles from "./Contact.module.scss";
import Email from "./Email";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Title>contact</Title>
      <Email />
    </div>
  );
};

export default Contact;
