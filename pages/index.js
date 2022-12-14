import ReferralBox from "../components/ReferralBox/ReferralBox";
import StepsBox from "../components/StepsBox";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ReferralBox />
        <StepsBox />
      </main>
    </div>
  );
}
