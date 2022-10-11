import React from 'react';
import RegisterForm from './RegisterForm';

function RegisterContainer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full bg-gray-200 gap-5">
        <div>
          <span className="font-[Audiowide] font-bold text-5xl text-fast ">
            FAST
          </span>
          <span className="font-[Audiowide]  text-5xl text-peach w3">
            CILITIES
          </span>
        </div>
        <RegisterForm />
      </div>
    </>
  );
}

export default RegisterContainer;
