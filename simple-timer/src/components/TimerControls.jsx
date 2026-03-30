import { useEffect, useRef } from "react";

const TimerControls = ({ isRunning, onToggle, onReset }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  return (
    <>
      <button
        onClick={onToggle}
        ref={startButtonRef}
        className="cursor-pointer mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3">
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={onReset}
        className="cursor-pointer mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        Reset
      </button>
    </>
  );
};

export default TimerControls;
