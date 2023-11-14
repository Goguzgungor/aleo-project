import React from 'react';

const Button = ({ text, onClick,butcolor }) => {
  return (
    <button style={style(butcolor)} onClick={onClick}>
      {text}
    </button>
  );
};

const style =( butcolor) =>{
  return {
    width: '200px',
    height: '100px',
    fontSize: '20px',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: butcolor,
    color: "white",
    border: 'none',
    cursor: 'pointer',
  }
};

export default Button;
