import React from 'react';
import Name from './Name';

const Afghanistan = () => {
  const players = [
    "Hashmatullah Shahidi (c)",
    "Rahmanullah Gurbaz",
    "Ibrahim Zadran",
    "Riaz Hassan",
    "Rahmat Shah",
    "Najibullah Zadran",
    "Mohammad Nabi",
    "Ikram Alikhil",
    "Azmatullah Omarzai",
    "Rashid Khan",
    "Mujeeb ur Rahman",
    "Noor Ahmad",
    "Fazalhaq Farooqi",
    "Abdul Rahman",
    "Naveen ul Haq",
  ];

  return (
    <div>
      <h1>Afghanistan Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default Afghanistan;
