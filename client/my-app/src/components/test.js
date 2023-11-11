import { useState, useEffect } from "react";

const Test = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count === 3 ? 0 : count + 1);
    }, 1000);
  });

  const plus = () => {
    setCount(count === 3 ? 0 : count + 1);
  };

  const minus = () => {
    setCount(count === 0 ? 3 : count - 1);
  };

  return (
    <>
      <p className="m-2 text-center text-3xl">{count}</p>
      <button onClick={plus}>Add</button>
      <button onClick={minus}>Remove</button>
    </>
  );
};

export default Test;
