import SuccessBox from "../components/ReferralBox/SuccessBox";
import StepsBox from "../components/StepsBox";

import styles from "../styles/Success.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SuccessBox />
        <StepsBox />
      </main>
    </div>
  );
}
