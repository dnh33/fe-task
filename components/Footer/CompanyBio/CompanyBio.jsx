import Image from "next/image";
import NavLink from "../../Navbar/NavLink";
import Copyright from "../Copyright/Copyright";
import styles from "./CompanyBio.module.scss";

const CompanyBio = () => {
  return (
    <div>
      <div className={styles.logo}>
        <NavLink url="/">
          <Image
            src="/logo.svg"
            alt="Rate Punk's company logo"
            className="logo"
            width={125}
            height={32}
          />
        </NavLink>
      </div>
      <p className={styles.text}>
        Ratepunk compares hotel room prices across the major online travel
        agencies. When you search for a room, Ratepunk extension scans the top
        booking sites and runs a price comparison, so you can be confident in
        knowing you’re getting the best deal!
      </p>
      <Copyright>© 2021 Ratepunk. All Rights Reserved.</Copyright>
    </div>
  );
};

export default CompanyBio;
