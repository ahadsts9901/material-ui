import React from 'react';
import Name from './Name';

const England = () => {
  const players = [
    "Jos Buttler (c)",
    "Moeen Ali",
    "Gus Atkinson",
    "Jonny Bairstow",
    "Sam Curran",
    "Liam Livingstone",
    "Dawid Malan",
    "Adil Rashid",
    "Joe Root",
    "Jason Roy",
    "Ben Stokes",
    "Reece Topley",
    "David Willey",
    "Mark Wood",
    "Chris Woakes",
  ];

  return (
    <div>
      <h1>England Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default England;
