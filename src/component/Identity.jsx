import React from 'react';

const Identity = ({ nama, npm, github }) => (
  <div>
    <h3>Identitas Diri</h3>
    <p>Nama: {nama}</p>
    <p>NPM: {npm}</p>
    <p>Github: <a href={github}>{github}</a></p>
  </div>
);

export default Identity;
