import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./createSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      Counter
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default Counter;
