import styles from "./styles/LoginPage.module.css";
import type { IPropsLogin } from "./types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin) => {
  const { setEmail, setPassword } = props;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
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
          <div>
            If you are a new user, click{" "}
            <a
              href="http://localhost:5173/auth/register"
              style={{ textDecoration: "none" }}
            >
              here
            </a>{" "}
            to register.
          </div>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;