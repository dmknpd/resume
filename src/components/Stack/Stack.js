import StackList from "../StackList/StackList";

import styles from "./Stack.module.css";

const Stack = () => {
  return (
    <div className={styles.stack}>
      <h2 className={styles.title}>My Stack</h2>

      <StackList />
    </div>
  );
};

export default Stack;
