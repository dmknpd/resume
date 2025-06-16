import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.title_container}>
        <h1 className={styles.name}>Dmytro Sochenko</h1>
        <h3 className={styles.title}>Full-Stack Developer</h3>
      </div>
    </div>
  );
};

export default Hero;
