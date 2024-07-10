import React from 'react';

const Input = ({ nomeLabel, placeholder }) => {
  return (
    <>
      <label htmlFor={nomeLabel}>{nomeLabel}</label>
      <input id={nomeLabel} type="text" placeholder={placeholder} />
    </>
  );
};

export default Input;
