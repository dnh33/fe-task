import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Image from "next/image";
import { ReactComponent as Email } from "../../../public/email.svg";

import styles from "./Form.module.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  // Handles the submit event on form submit.
  const submitHandler = async (formData) => {
    // Get data from the form.
    const data = {
      email: formData.email,
    };
    console.log(data);
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "https://api.jsonbin.io/v3/b";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
        // Create Bin Access Only Token
        "X-Bin-Name": "Referral Sign Up",
        "X-Access-Key": process.env.BIN_PASS,
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    await fetch(endpoint, options);
    console.log("Email successfully sent to server");
    router.push("/success");
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.form}>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p className={styles.error}>{message}</p>}
        />
        <div className={styles.inputContainer}>
          <div className={styles.iconContainer}>
            <Image
              src="/email.svg"
              alt="icon for email address"
              className={styles.image}
              width={20}
              height={16}
            />
          </div>
          <input
            id="user-email"
            name="email"
            aria-label="Enter Email Address"
            placeholder="enter your email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
        </div>
      </div>
      <input type="submit" value="Get Referral Link" />
    </form>
  );
};

export default Form;
