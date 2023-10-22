import React from 'react';
import Name from './Name';

const SouthAfrica = () => {
  const players = [
    "Temba Bavuma (c)",
    "Gerald Coetzee",
    "Quinton de Kock",
    "Reeza Hendricks",
    "Marco Jansen",
    "Heinrich Klaasen",
    "Keshav Maharaj",
    "Aiden Markram",
    "David Miller",
    "Lungi Ngidi",
    "Andile Phehlukwayo",
    "Kagiso Rabada",
    "Tabraiz Shamsi",
    "Rassie van der Dussen",
    "Lizaad Williams",
  ];

  return (
    <div>
      <h1>South Africa Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default SouthAfrica;
