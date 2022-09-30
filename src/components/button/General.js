import React from 'react';

function General({ text, color, width, type = 'button' }) {
  return (
    <button
      type={type}
      className={`text-white bg-${color}-700 hover:bg-${color}-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-${width}`}
    >
      {text}
    </button>
  );
}

export default General;
