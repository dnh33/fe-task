import Link from "next/link";

import styles from "./List.module.scss";

const List = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link href="/">
          <a className={styles.link}>Price Comparison</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className={styles.link}>Chrome Extension</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className={styles.link}>How It Works</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className={styles.link}>Ratepunk Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className={styles.link}>Privacy Policy</a>
        </Link>
      </li>
    </ul>
  );
};

export default List;
