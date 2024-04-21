import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(increment, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Contador</h2>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
