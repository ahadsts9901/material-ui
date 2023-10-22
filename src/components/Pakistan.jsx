import React from 'react';
import Name from './Name';

const Pakistan = () => {
  const players = [
    "Babar Azam (c)",
    "Shadab Khan",
    "Abdullah Shafique",
    "Fakhar Zaman",
    "Haris Rauf",
    "Hasan Ali",
    "Iftikhar Ahmed",
    "Imam-ul-Haq",
    "Mohammad Nawaz",
    "Mohammad Rizwan",
    "Mohammad Wasim Jnr",
    "Salman Ali Agha",
    "Saud Shakeel",
    "Shaheen Shah Afridi",
    "Usama Mir",
  ];

  return (
    <div>
      <h1>Pakistan Team</h1>
      {players.map((player, index) => (
        <Name key={index} name={player} />
      ))}
    </div>
  );
};

export default Pakistan;
