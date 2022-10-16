import Form from "./Form";

import styles from "./ReferralBox.module.scss";

const ReferralBox = () => {
  return (
    <div className={styles.referralBox}>
      <div className={styles.container}>
        <h1 className={styles.title}>refer friends and get rewards</h1>
        <p className={styles.description}>
          <span className={styles.capitalize}>refer</span> your friends to us
          and earn hotel booking vouchers.{" "}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className={styles.capitalize}>we'll</span> give you 1 coin for
          each friend that installs our extension.{" "}
          <span className={styles.capitalize}>minimum</span> cash-out at 20
          coins.
        </p>
        <Form />
        <p className={styles.bottomText}>
          <span className={styles.capitalize}>l</span>imits on max rewards
          apply.
        </p>
      </div>
    </div>
  );
};

export default ReferralBox;
