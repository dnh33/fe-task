import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import EmailConfirmed from "./EmailConfirmed/EmailConfirmed";
import styles from "./SuccessBox.module.scss";

const SuccessBox = () => {
  const [value, setValue] = useState("https://company.com/referral");
  const [copied, setCopied] = useState(false);

  return (
    <div className={styles.successBox}>
      <div className={styles.container}>
        <h1 className={styles.title}>refer friends and get rewards</h1>
        <p className={styles.description}>
          <span className={styles.capitalize}>refer</span> your friends to us
          and earn internet vouchers.{" "}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className={styles.capitalize}>we'll</span> give you 1 coin for
          each friend that installs our extension.{" "}
          <span className={styles.capitalize}>minimum</span> cash-out at 20
          coins.
        </p>
        <>
          <EmailConfirmed />
        </>
        <div className={styles.inputContainer}>
          <input
            id="referral"
            value={value}
            onChange={({ target: { value } }) =>
              setState({ value, copied: false })
            }
            disabled
          />
          <CopyToClipboard
            text={value}
            onCopy={() => setCopied({ copied: true })}
          >
            <button className={styles.button}>copy</button>
          </CopyToClipboard>
        </div>
        <>
          {copied ? <span className={styles.copySuccess}>Copied.</span> : null}
        </>
        <p className={styles.bottomText}>
          <span className={styles.capitalize}>l</span>imits on max rewards
          apply.
        </p>
      </div>
    </div>
  );
};

export default SuccessBox;
