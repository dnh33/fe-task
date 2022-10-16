import AppstoreButton from "./AppstoreButton/AppstoreButton";
import styles from "./AppstoresBar.module.scss";
import Review from "./Review/Review";

const AppstoresBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <AppstoreButton
          url="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
          src="/chrome.svg"
          alt="Get our app on the chrome web store"
        >
          chrome web
        </AppstoreButton>
        <AppstoreButton
          url="https://apps.apple.com/app/ratepunk/id1607823726"
          src="/apple.svg"
          alt="Get our app on the apple app store"
        >
          apple app
        </AppstoreButton>
        <Review url="/" src="/star.svg" alt="chrome web store reviews" />
      </div>
    </div>
  );
};

export default AppstoresBar;
