import React from 'react';

const BackgroundChanger = ({ changeBackgroundColor }) => (
  <div>
    <button onClick={changeBackgroundColor}>Change Bg</button>
  </div>
);

export default BackgroundChanger;
