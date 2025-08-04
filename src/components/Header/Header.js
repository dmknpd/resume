import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>.dmk</div>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <a
              className={styles.link}
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </a>
          </li>
          <li className={styles.list_item}>
            <a
              className={styles.link}
              href="#mystack"
              onClick={() => setMenuOpen(false)}
            >
              My Stack
            </a>
          </li>
          <li className={styles.list_item}>
            <a
              className={styles.link}
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li className={styles.list_item}>
            <a
              className={styles.link}
              href="#contacts"
              onClick={() => setMenuOpen(false)}
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
