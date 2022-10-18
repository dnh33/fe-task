import Image from "next/image";
import NavLink from "../../Navbar/NavLink";
import Copyright from "../Copyright/Copyright";
import styles from "./CompanyBio.module.scss";

const CompanyBio = () => {
  return (
    <div>
      <div className={styles.logo}>
        <ul>
          <NavLink url="/">
            <Image
              src="https://fakeimg.pl/125x32/?text=Logo"
              alt="company logo"
              className="logo"
              width={125}
              height={32}
            />
          </NavLink>
        </ul>
      </div>
      <p className={styles.text}>
        Company Name compares various prices across the major online agencies.
        When you search for anything, Company Name scans the top online sites
        and runs a price comparison, so you can be confident in knowing you’re
        getting the best deal!
      </p>
      <Copyright>© 2021 Company Name. All Rights Reserved.</Copyright>
    </div>
  );
};

export default CompanyBio;
