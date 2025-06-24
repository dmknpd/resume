import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>.dmk</div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <a className={styles.link} href="#about">
              About Me
            </a>
          </li>
          <li className={styles.list_item}>
            <a className={styles.link} href="#mystack">
              My Stack
            </a>
          </li>
          <li className={styles.list_item}>
            <a className={styles.link} href="#projects">
              Projects
            </a>
          </li>
          <li className={styles.list_item}>
            <a className={styles.link} href="#contacts">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
