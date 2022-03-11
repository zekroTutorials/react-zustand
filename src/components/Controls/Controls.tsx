import { useStore } from "../../store";
import styles from "./Controls.module.scss";

interface Props {}

export const Controls: React.FC<Props> = ({}) => {
  const [increase, reset] = useStore((s) => [s.increaseCount, s.resetCount]);

  return (
    <div className={styles.controls}>
      <button onClick={increase}>Increase</button>
      <button onClick={reset} className={styles.reset}>
        Reset
      </button>
    </div>
  );
};
