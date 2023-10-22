import React from 'react';
import Name from './Name';

const Netherland = () => {
  const players = [
    "Scott Edwards (c)",
    "Max O'Dowd",
    "Bas de Leede",
    "Vikram Singh",
    "Teja Nidamanuru",
    "Paul van Meekeren",
    "Colin Ackermann",
    "Roelof van der Merwe",
    "Logan van Beek",
    "Aryan Dutt",
    "Ryan Klein",
    "Wesley Barresi",
    "Saqib Zulfiqar",
    "Shariz Ahmad",
    "Sybrand Engelbrecht",
  ];

  return (
    <div>
      <h1>Netherlands Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default Netherland;