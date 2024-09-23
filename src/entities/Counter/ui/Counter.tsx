import { Button } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
interface CounterProps {}

export const Counter = ({}: CounterProps) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <span data-testid={"value-title"}>{counterValue} </span>
      <Button data-testId='increment-btn' onClick={increment}>increment</Button>
      <Button data-testid='decrement-btn' onClick={decrement}>decrement</Button>
    </div>
  );
};



