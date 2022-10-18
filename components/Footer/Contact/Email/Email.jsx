import Image from "next/image";
import Link from "next/link";
import styles from "./Email.module.scss";

const Email = () => {
  return (
    <ul>
      <li>
        <Link href="mailto: abc@example.com">
          <a>
            <div title="Send us an email" className={styles.flexbox}>
              <div className={styles.img}>
                <Image
                  src="/email-footer.svg"
                  alt="icon for email address"
                  className="logo"
                  width={16}
                  height={13}
                />
              </div>
              <p className={styles.text}>hi@company.com</p>
            </div>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Email;
