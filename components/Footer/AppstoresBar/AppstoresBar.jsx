import AppstoreButton from "./AppstoreButton/AppstoreButton";
import styles from "./AppstoresBar.module.scss";
import Review from "./Review/Review";

const AppstoresBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <AppstoreButton
          url="/"
          src="/chrome.svg"
          alt="Get our app on the chrome web store"
        >
          chrome web
        </AppstoreButton>
        <AppstoreButton
          url="/"
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
