import { useRef, useState } from "react";
import InputSearch from "../../components/ui/input/InputSearch";

const HomePage = () => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef(0);

  const handleIncremment = () => {
    setCount(count + 1);
    countRef.current++;
    console.log("state: ", count);
    console.log("ref: ", countRef.current);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      count: {countRef.current}
      <button onClick={handleIncremment}>Increment</button>
      <InputSearch />
    </div>
  );
};

export default HomePage;
