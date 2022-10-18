import AppstoresBar from "./AppstoresBar";
import CompanyBio from "./CompanyBio";
import QuickLinks from "./QuickLinks";
import Contact from "./Contact";
import Social from "./Social";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <AppstoresBar />
      <footer className={styles.footer}>
        <section className={styles.flexbox}>
          <CompanyBio className={styles.company} />
          <div className={styles.lastCol}>
            <QuickLinks className={styles.quicklinks} />
            <div className={styles.container}>
              <Contact className={styles.contact} />
              <Social className={styles.social} />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
