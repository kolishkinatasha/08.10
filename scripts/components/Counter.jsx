import React, { useState } from 'react';


const App = () => {

  const useCount = (initialState = 0) => {

    const [count, setCount] = useState(+initialState);

    const action = {
      increase: () => setCount(count + 1),
      decrease: () => setCount(count - 1),
      reset: () => setCount(0)
    };

    return [count, action];
  };
  
  const [count, { increase, decrease, reset }] = useCount('0'); //TODO HERE

  return (
    <>
      <h1>{`state is ${count}`}</h1>
      <button onClick={increase}> Increase </button>
      <button onClick={decrease}> Decrease </button>
      <button onClick={reset}> Reset </button>
    </>
  );
};

export default App;
