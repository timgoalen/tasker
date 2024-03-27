"use client";

import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/app/styles/RegisterForm.module.css";

interface IFormInput {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  async function registerUser(data) {
    try {
      const response = await axios.post(
        "https://8000-timgoalen-taskerapi-ghx0286jesu.ws-eu110.gitpod.io/dj-rest-auth/registration/",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("sending signup form");
    console.log(data);
    registerUser(data);
  };

  return (
    <>
      {/* OLD FORM */}
      <section className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label>Username</label>
          <input
            {...register("username", {
              required: "Please enter a username",
              maxLength: {
                value: 150,
                message: "Username must be less than 150 characters long",
              },
            })}
            className={styles.field}
          ></input>
          <p className={styles.errors}>{errors.username?.message}</p>

          <label>Email</label>
          <input
            {...register("email", {
              required: "Please enter your email address",
            })}
            type="email"
            className={styles.field}
          ></input>
          <p className={styles.errors}>{errors.email?.message}</p>

          <label>Password</label>
          <input
            {...register("password1", {
              required: "Please enter a password",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type="password"
            className={styles.field}
          ></input>
          <p className={styles.errors}>{errors.password1?.message}</p>

          <label>Password2</label>
          <input
            {...register("password2", {
              required: "Please enter a password",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type="password"
            className={styles.field}
          ></input>
          <p className={styles.errors}>{errors.password2?.message}</p>

          {/* <label>Password (again)</label>
          <input type="password"></input> */}
          {/* <p className={styles.forgotPassword}>Forgot your password?</p> */}
          {/* <button>Sign In</button> */}
          <input type="submit" className={styles.submit}></input>
          {/* <p>
            Need an account? <span className={styles.highlighted}>Sign up</span>
          </p> */}
          {/* <div className={styles.spacerContainer}>
            <span className={styles.spacer}></span>
            <div className={styles.spacerText}>
              <p> or </p>
            </div>
            <span className={styles.spacer}></span>
          </div> */}
          {/* <button className={styles.socialBtn}>
            <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
            Sign In with Google
          </button> */}
        </form>
      </section>
    </>
  );
}
