import React from 'react';
import ResultCards from './ResultCards';

function SearchResultContainer() {
  return (
    <>
      <div className="flex flex-col">
        <div className=" mt-12 ml-16 mb-5 text-xl">Available Room</div>

        <ResultCards />
        <div className="flex justify-end">
          <button
            type="button"
            className={`text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[10rem]  h-12 m-3`}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchResultContainer;
