import './App.css';
import Counter from "./component/Counter";
import { CountContext } from "./context/CountContext";  // Importing named export
import { useContext } from 'react';

function App() {
  const counterState = useContext(CountContext);

  if (!counterState) {
    console.error("CountContext is undefined. Make sure CountContextProvider is wrapping your component tree.");
  } else {
    console.log("Context", counterState);
  }

  return (
    <>
      <h1>Count is: {counterState?.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
