import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <h4 className={styles.title}>Responsible</h4>
          <p className={styles.text}>
            I consistently deliver high-quality work, meeting deadlines and
            ensuring project reliability.
          </p>
        </li>
        <li className={styles.list_item}>
          <h4 className={styles.title}>Curious</h4>
          <p className={styles.text}>
            Driven by a passion for learning, I constantly explore new
            technologies and approaches.
          </p>
        </li>
        <li className={styles.list_item}>
          <h4 className={styles.title}>Self-Motivated</h4>
          <p className={styles.text}>
            Highly self-driven, I am committed to continuous improvement.
          </p>
        </li>
        <li className={styles.list_item}>
          <h4 className={styles.title}>Communicative</h4>
          <p className={styles.text}>
            Clear and effective communication skills, both verbal and written. 
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
