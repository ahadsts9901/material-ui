import React from 'react';
import Name from './Name';

const NewZealand = () => {
  const players = [
    "Tom Latham (c)",
    "Kane Williamson",
    "Trent Boult",
    "Mark Chapman",
    "Devon Conway",
    "Lockie Ferguson",
    "Matt Henry",
    "Daryl Mitchell",
    "Jimmy Neesham",
    "Glenn Phillips",
    "Rachin Ravindra",
    "Mitchell Santner",
    "Ish Sodhi",
    "Tim Southee",
    "Will Young",
  ];

  return (
    <div>
      <h1>New Zealand Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default NewZealand;
