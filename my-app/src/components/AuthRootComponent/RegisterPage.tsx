import React, { useState } from "react";
import styles from "./styles/RegisterPage.module.css";
import { useNavigate } from 'react-router-dom';
import { IPropsRegister } from "./types/auth";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister) => {
  const { setEmail, setPassword, setRepeatPassword } = props;
  const [isAdult, setIsAdult] = useState<boolean>(false);
  const [subscribe, setSubscribe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // Состояние для загрузки
  const [error, setError] = useState<string | null>(null); // Состояние для ошибки
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Начать загрузку

    const formData = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      repeatPassword: e.currentTarget.confirmPassword.value,
      isAdult,
      subscribe,
    };

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register"); // Обработка неудачного ответа
      }

      const data = await response.json();
      console.log("Success:", data);
      navigate('/');
    } catch (error) {
      setError('An unknown error occurred'); // Установка ошибки
    } finally {
      setLoading(false);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <img
        src="/img/unsplash_PzXqG8f2rrE.jpg"
        alt="Main Background"
        className={styles.backgroundImage}
      />
      <div className={styles.card}>
        <div className={styles.goHomeContainer}>
          <button type="button" className={styles.goHomeButton} onClick={handleGoHome}>
            Go to Home
          </button>
        </div>
        <h2 className={styles.title}>Registration</h2>

        {loading && <div className="text-center">
          <div className="spinner-border text-black" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>} {/* Индикация загрузки */}

        {error && <div className={styles.error}>{error}</div>} {/* Сообщение об ошибке */}

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
          <div className={styles.formGroupCheckbox}>
            <input
              type="checkbox"
              id="age"
              checked={isAdult}
              onChange={(e) => setIsAdult(e.target.checked)}
            />
            <label htmlFor="age" className={styles.checkboxLabel}>
              I am 18 years old or older
            </label>
          </div>
          <div className={styles.formGroupCheckbox}>
            <input
              type="checkbox"
              id="subscribe"
              checked={subscribe}
              onChange={(e) => setSubscribe(e.target.checked)}
            />
            <label htmlFor="subscribe" className={styles.checkboxLabel}>
              Subscribe to newsletter
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;