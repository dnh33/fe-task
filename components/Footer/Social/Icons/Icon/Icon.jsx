import Link from "next/link";
import Image from "next/image";

import styles from "./Icon.module.scss";

const Icon = ({ href, src, alt }) => {
  return (
    <li>
      <Link href={href}>
        <a>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Image
                src={src}
                alt={alt}
                className="logo"
                width={16}
                height={16}
              />
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Icon;
