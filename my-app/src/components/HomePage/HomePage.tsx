import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <>
     <img 
        src="/img/unsplash_PzXqG8f2rrE.jpg"
        alt="Main Background" 
        className={styles.backgroundImage} 
      />
    <div className={styles["button-container"]}>
      <button className={styles.button}>Catalog</button>
      <button className={styles.button}>
        <a href="http://localhost:5173/auth/register">Registration</a>
      </button>
    </div>
    </>
  );
};

export default HomePage;