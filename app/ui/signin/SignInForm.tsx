import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/app/styles/SignInForm.module.css";

export default function SignInForm() {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <label>Email</label>
        <input type="email"></input>

        <label>Password</label>
        <input type="password"></input>

        <p className={styles.forgotPassword}>Forgot your password?</p>

        <button>Sign In</button>

        <p>Need an account? <span className={styles.highlighted}>Sign up</span></p>

        <div className={styles.spacerContainer}>
          <span className={styles.spacer}></span>
          <div className={styles.spacerText}>
            <p> or </p>
          </div>
          <span className={styles.spacer}></span>
        </div>

        <button className={styles.socialBtn}>
          <FontAwesomeIcon icon={faGoogle} className={styles.icon}/>
          Sign In with Google
        </button>
      </form>
    </section>
  );
}
