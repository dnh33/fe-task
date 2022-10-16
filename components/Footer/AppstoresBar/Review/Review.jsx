import Link from "next/link";
import Image from "next/image";
import styles from "./Review.module.scss";

const Review = ({ url, src, alt }) => {
  return (
    <Link href={url}>
      <div
        className={styles.container}
        title="Read our reviews on Chrome Store"
      >
        <div className={styles.images}>
          <Image src={src} alt={alt} width={20} height={20} />
          <Image src={src} alt={alt} width={20} height={20} />
          <Image src={src} alt={alt} width={20} height={20} />
          <Image src={src} alt={alt} width={20} height={20} />
          <Image src={src} alt={alt} width={20} height={20} />
        </div>
        <div>
          <p className={styles.text}>chrome store reviews</p>
        </div>
      </div>
    </Link>
  );
};

export default Review;
