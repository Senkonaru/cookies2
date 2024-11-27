import React, { useState } from 'react';

const NameForm = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3>Form Input</h3>
      <input type="text" value={name} onChange={handleChange} placeholder="Masukkan nama" />
      <p>Output : {name}</p>
    </div>
  );
}

export default NameForm;
