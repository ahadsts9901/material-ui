import React from 'react';
import Name from './Name';

const India = () => {
  const players = [
    "Rohit Sharma (c)",
    "Shubman Gill",
    "Virat Kohli",
    "Shreyas Iyer",
    "KL Rahul",
    "Ishan Kishan",
    "Suryakumar Yadav",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "Axar Patel",
    "Shardul Thakur",
    "Jasprit Bumrah",
    "Kuldeep Yadav",
    "Mohammed Shami",
    "Mohammed Siraj",
  ];

  return (
    <div>
      <h1>India Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default India;
