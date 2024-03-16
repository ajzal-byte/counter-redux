import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incAmount, setIncAmount] = useState(0);

  const addValue = Number(incAmount) || 0;

  const resertAll = () => {
    setIncAmount(0);
    dispatch(reset());
  };

  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <input
        style={{ marginTop: "20px", width: "50px" }}
        type="text"
        value={incAmount}
        onChange={(e) => setIncAmount(e.target.value)}
      />
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button style={{ marginLeft: "10px" }} onClick={resertAll}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
