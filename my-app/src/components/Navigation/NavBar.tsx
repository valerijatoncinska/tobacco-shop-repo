import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { guestNavItems } from "constans/navigation";

const NavBar: React.FC = () => {


  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <NavLink to="/" className={styles.navLink}>Home</NavLink>
          <NavLink to="/catalog" className={styles.navLink}>Catalog</NavLink>
        </div>
        <h1>
          <a href="http://localhost:5173/" className={styles.title}>Tobacco</a>
        </h1>
        <div className={styles.navRight}>
          {guestNavItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={styles.navLink}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;