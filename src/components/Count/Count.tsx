import { useStore } from "../../store";
import styles from "./Count.module.scss";

interface Props {}

export const Count: React.FC<Props> = ({}) => {
  const count = useStore((s) => s.count);
  return <div className={styles.count}>{count}</div>;
};
