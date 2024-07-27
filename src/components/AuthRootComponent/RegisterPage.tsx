import styles from "./styles/RegisterPage.module.css";
import type { IPropsRegister } from "./types/auth";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister) => {
  const { setEmail, setPassword, setRepeatPassword } = props;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Register</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter your email..."
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Enter your password..."
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password:
            </label>
            <input
              type="password"
              className={styles.input}
              onChange={(e) => setRepeatPassword(e.target.value)}
              id="confirmPassword"
              placeholder="Confirm your password..."
              required
            />
          </div>
          {/* <div className={styles.formGroup}>
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="age" />
              <label htmlFor="age" className={styles.checkboxLabel}>
                I am 18 years old or older
              </label>
            </div>
          </div> */}
          {/* <div className={styles.formGroup}>
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="subscribe" />
              <label htmlFor="subscribe" className={styles.checkboxLabel}>
                Subscribe to newsletter
              </label>
            </div>
          </div> */}
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;