import Image from "next/image";
import NavLink from "./NavLink";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <NavLink url="/">
              <Image
                src="/logo.svg"
                alt="Rate Punk's company logo"
                width={125}
                height={32}
              />
            </NavLink>
          </div>
          <input
            id="menu-toggle"
            className={styles.menuToggle}
            type="checkbox"
          />
          <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
            <div className={styles.menuButton}></div>
          </label>
          <ul className={styles.menu}>
            <NavLink url="/chrome-extension">
              <span className={styles.capitalize}>chrome extension</span>
            </NavLink>

            <NavLink url="/price-comparison">
              <span className={styles.capitalize}>price comparison</span>
            </NavLink>

            <NavLink url="/blog">
              <span className={styles.capitalize}>blog</span>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
