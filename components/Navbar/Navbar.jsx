import Image from "next/image";
import NavLink from "./NavLink";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <ul>
              <NavLink url="/">
                <Image
                  src="https://fakeimg.pl/125x32/?retina=1&text=Logo&font=noto"
                  alt="Company logo"
                  width={125}
                  height={32}
                />
              </NavLink>
            </ul>
          </div>
          <input
            id="menu-toggle"
            className={styles.menuToggle}
            type="checkbox"
          />
          <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
            <div className={styles.menuButton}></div>
            <div className={styles.menuButton2}></div>
            <div className={styles.menuButton3}></div>
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
