import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.title = `Counts : ${clickCount}`;
  }, [clickCount]);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click!!!</button>
      <p>All Counts: {clickCount}</p>
    </div>
  );
}

export default Counter;
