import React, { useState, useEffect } from "react";

const RollTheDice = () => {
  const [dice, setNumber] = useState(0);
  const [rolls, setRolls] = useState([]);

  useEffect(() => {
    document.title = `Hey last extraction: ${dice}`;
  });

  const roll = () => {
    const value = Math.floor(Math.random() * Math.floor(5)) + 1;
    setNumber(value);
    setRolls([value, ...rolls]);
    return value;
  };

  const reset = () => {
    const value = 0;
    setNumber(value);
    setRolls([]);
    return value;
  };

  return (
    <div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="flex-grow text-3xl  tracking-tight text-gray-900 sm:text-4xl">
            <span className="block font-extrabold">Roll The Dice!!!</span>
            {rolls.length > 0 ? (
              <>
                <span className="block text-blue-600">Your number:</span>
                <span className="block text-blue-600">{dice}</span>
              </>
            ) : (
              <>
                <span className="block text-blue-600">
                  Let's start to play!
                </span>
                <span className="block text-blue-600">
                  Click on "Let's Roll!!!" button.
                </span>
              </>
            )}
          </h2>
          <div className="flex-none mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                onClick={roll}
              >
                Let's Roll!!!
              </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <button
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                onClick={reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      {rolls.length === 0 ? (
        <p>Let's start to play, click on "Let's Roll!!!" button.</p>
      ) : (
        <div className="border-t border-gray-200">
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            {rolls.map((item, k) => (
              <span
                key={k}
                className="text-2xl text-white rounded-full py-3 px-6 shadow-2xl bg-blue-500"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="text-2xl rounded-full py-3 px-6 shadow-2xl bg-grey-100">
            Number of rolls {rolls.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default RollTheDice;
