import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div
      className="p-10 flex justify-center 
    items-center h-screen bg-gray-600"
    >
      <div
        className="bg-slate-300 p-20 rounded-lg shadow-black
      shadow-2xl space-y-4"
      >
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-600 w-1/4 flex justify-center 
            items-center rounded-md text-lg font-semibold"
            onClick={() => setStep((cur) => cur - 1)}
          >
            -
          </button>
          <span className="text-base font-semibold">Step : {step}</span>
          <button
            className="bg-blue-600 w-1/4 flex justify-center 
            items-center rounded-md text-lg font-semibold"
            onClick={() => setStep((cur) => cur + 1)}
          >
            +
          </button>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-600 w-1/4 flex justify-center 
            items-center rounded-md text-lg font-semibold"
            onClick={() => setCount((cur) => cur - step)}
          >
            -
          </button>
          <span className="text-base font-semibold">Count : {count}</span>
          <button
            className="bg-blue-600 w-1/4 flex justify-center 
            items-center rounded-md text-lg font-semibold"
            onClick={() => setCount((cur) => cur + step)}
          >
            +
          </button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was`}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}

export default Counter;
