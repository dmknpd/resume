import styles from "./ProjectItem.module.css";

const ProjectItem = ({ title, description, img }) => {
  return (
    <li className={styles.project_item}>
      <img src={img} alt="img" className={styles.img} />
      <div className={styles.project_content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{description}</p>
      </div>
    </li>
  );
};

export default ProjectItem;
