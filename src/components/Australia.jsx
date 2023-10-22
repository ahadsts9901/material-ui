import React from 'react';
import Name from './Name';

const Australia = () => {
  const players = [
    "Pat Cummins (c)",
    "Sean Abbott",
    "Alex Carey",
    "Cameron Green",
    "Josh Hazlewood",
    "Travis Head",
    "Josh Inglis",
    "Marnus Labuschagne",
    "Mitchell Marsh",
    "Glenn Maxwell",
    "Steven Smith",
    "Mitchell Starc",
    "Marcus Stoinis",
    "David Warner",
    "Adam Zampa",
  ];

  return (
    <div>
      <h1>Australia Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default Australia;
