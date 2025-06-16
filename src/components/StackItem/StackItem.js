import styles from "./StackItem.module.css";

const StackItem = ({ title, icon }) => {
  return (
    <div className={styles.stack_item}>
      <img src={icon} alt="" className={styles.img} />
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
      </div>
    </div>
  );
};

export default StackItem;
