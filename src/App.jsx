import React, { useState } from 'react';
import Counter from './component/Counter';
import Identity from './component/Identity';
import NameForm from './component/NameForm';
import './style.css'

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <body>
      <div className="">
      <div style={{ backgroundColor: backgroundColor }}>
      <h1>React</h1>
      <Counter />
      <Identity 
      nama="Ariel"
      npm="2428240044" 
      github="https://github.com/Senkonaru" />
      <NameForm />
      <button onClick={changeBackgroundColor}>Change Bg</button>
    </div>
    </div>
    </body>
  );
}

export default App;
