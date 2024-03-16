import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
