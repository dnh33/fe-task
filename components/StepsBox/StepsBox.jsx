import BoxItem from "./BoxItem/BotItem";
import styles from "./StepsBox.module.scss";

const StepsBox = () => {
  return (
    <div className={styles.stepsBox}>
      <BoxItem
        title="step 1"
        src="/invite.svg"
        width="128"
        height="140"
        headline="invite friends"
        text="Refer friends with your unique referral link."
        alt="Step 1: Refer friends with your unique referral link."
      />
      <BoxItem
        title="step 2"
        src="/collect-coins.svg"
        width="144"
        height="144"
        headline="collect coins"
        text="Get 1 coin for each friend that installs our extension using your referral link."
        alt="Step 2: Get 1 coin for each friend that installs our extension using your referral link."
      />
      <BoxItem
        title="step 3"
        src="/voucher.svg"
        width="144"
        height="107"
        headline="get voucher"
        text="Redeem for a $20 hotel booking voucher once you collect 20 coins."
        alt="Step 3: Redeem for a $20 hotel booking voucher once you collect 20 coins."
      />
    </div>
  );
};

export default StepsBox;
