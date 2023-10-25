import React, { useState } from 'react';

const Fts = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);

  };
  const Reset = () => {
    setCount(count == useState);

  };

  return (
    <div className='containt'>
      <h1>Count: {count}</h1>
      <div className='row'>

      <button onClick={Increment}>Increment</button>
      <button onClick={Reset}>rest</button>
      <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Fts;