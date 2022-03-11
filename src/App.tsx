import { Controls } from "./components/Controls/Controls";
import { Count } from "./components/Count/Count";

interface Props {}

export const App: React.FC<Props> = ({}) => {
  return (
    <div>
      <Count />
      <Controls />
    </div>
  );
};

export default App;
