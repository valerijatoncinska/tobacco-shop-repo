import React, { useState } from "react";
import styles from "./styles/LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { IPropsLogin } from "./types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin) => {
  const { setEmail, setPassword } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      console.log("Success:", data);
      navigate("/"); // Переход на домашнюю страницу после успешного входа
    } catch (error) {
      setError('An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.backgroundContainer}>
        <img
          src="/img/unsplash_PzXqG8f2rrE.jpg"
          alt="Main Background"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.goHomeContainer}>
            <button
              type="button"
              className={styles.goHomeButton}
              onClick={handleGoHome}
            >
              Go to Home
            </button>
          </div>
          <h2 className={styles.title}>Login</h2>

          {loading && (
            <div className="text-center">
              <div className="spinner-border text-black" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit}>
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
                className={styles.registerLink}
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
    </>
  );
};

export default LoginPage;
