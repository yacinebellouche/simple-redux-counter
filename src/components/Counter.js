import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    //dispatch({ type: "TOGGLE" });
  };
  function handleIncrement() {
    dispatch(counterActions.increment());
    //dispatch({ type: "INCREMENT" });
  }
  function handleIncrease() {
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_NAME, payload: 5}
    // dispatch({ type: "INCREASE", amount: 5 });
  }
  function handleDecrement() {
    dispatch(counterActions.decrement());
    // dispatch({ type: "DECREMENT" });
  }
  console.log(toggle);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
