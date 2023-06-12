import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>Counter application</h1>
      <h2>Counter value: {counter}</h2>
      <div>
        <button className={counter === 0 ? 'disabled-button': ''} onClick={() => dispatch({ type: "DEC" }) } disabled={counter === 0}>Decrement</button>
        <button onClick={() => dispatch({ type: "ADD_BY_10", payload: 10 })}>
          Add by 10
        </button>
        <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
        <div>
          <button onClick={() => dispatch({ type: "RST" })}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
