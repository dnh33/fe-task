import Link from "next/link";

import styles from "./Navlink.module.scss";

export default function NavLink({ children, url }) {
  return (
    <li>
      <Link href={url}>
        <a className={styles.link}>{children}</a>
      </Link>
    </li>
  );
}
