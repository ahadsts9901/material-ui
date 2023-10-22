import React from 'react';
import Name from './Name';

const Srilanka = () => {
  const players = [
    "Dasun Shanaka (c)",
    "Kusal Mendis",
    "Kusal Perera",
    "Pathum Nissanka",
    "Dimuth Karunaratne",
    "Sadeera Samarawickrama",
    "Charith Asalanka",
    "Dhananjaya de Silva",
    "Dushan Hemantha",
    "Maheesh Theekshana",
    "Dunith Wellalage",
    "Kasun Rajitha",
    "Matheesha Pathirana",
    "Lahiru Kumara",
    "Dilshan Madushanka",
  ];

  return (
    <div>
        <h1>SriLanka Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default Srilanka;
