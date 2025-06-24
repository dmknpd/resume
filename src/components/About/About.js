import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <h4 className={styles.title}>Responsible</h4>
          <p className={styles.text}>
            Consistently deliver high-quality work on time, ensuring reliability
            and attention to detail.
          </p>
        </li>
        <li className={styles.list_item}>
          <h4 className={styles.title}>Curious</h4>
          <p className={styles.text}>
            Eager to learn and explore new technologies, always seeking smarter
            ways to solve problems.
          </p>
        </li>
        <li className={styles.list_item}>
          <h4 className={styles.title}>Self-Motivated</h4>
          <p className={styles.text}>
            Highly self-driven, committed to continuous improvement, and always
            seek opportunities to grow.
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
