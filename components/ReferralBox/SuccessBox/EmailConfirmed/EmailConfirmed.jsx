import Image from "next/image";

import styles from "./EmailConfirmed.module.scss";

const EmailConfirmed = () => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.iconContainer}>
        <Image
          src="/success.svg"
          alt="icon for success message"
          width={32}
          height={32}
        />
      </div>
      <p className={styles.text}>
        <span className={styles.capitalize}>your </span>email is confirmed!
      </p>
    </div>
  );
};

export default EmailConfirmed;
