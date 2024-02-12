import React from 'react';

const Button = ({ onClick, label, color, borderColor, backgroundColor, width, fontSize, height, borderRadius, padding }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || '#0602B2',
    padding: padding || '10px 10px',
    border: `2px solid ${borderColor || color || 'blue'}`,
    borderRadius: borderRadius || '5px',
    color: color || 'white',
    cursor: 'pointer',
    width: width || 'auto',
    fontSize: fontSize || '12px',
    height: height || 'auto',
    textAlign: 'center',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
