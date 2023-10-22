import React from 'react';
import Name from './Name';

const Bangladesh = () => {
  const players = [
    "Shakib Al Hasan (C)",
    "Litton Das",
    "Najmul Hossain Shanto",
    "Tanzid Hasan",
    "Towhid Hridoy",
    "Mahmudullah Riyad",
    "Mushfiqur Rahim",
    "Mehidy Hasan",
    "Mahedi Hasan",
    "Tanzim Sakib",
    "Nasum Ahmed",
    "Shoriful Islam",
    "Hasan Mahmud",
    "Taskin Ahmed",
    "Mustafizur",
  ];

  return (
    <div>
      <h1>Bangladesh Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default Bangladesh;
