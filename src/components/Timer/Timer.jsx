import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp,onExpire: () => console.warn('onExpire called'), autoStart:false });


  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="text-3xl text-center font-bold text-white">Start your workout with timer...⏱️⏱️</h1>
      <div style={{ fontSize: '100px', color:'white' }}>
      <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p className="my-4 text-white mx-auto">{isRunning ? 'Running' : 'Not running'}</p>
      <button className="bg-white text-black mx-4 px-4 py-2 rounded-[20px]" onClick={start}>Start ▶️</button>
      <button className="bg-white text-black mx-4 px-4 py-2 rounded-[20px]" onClick={pause}>Pause ⏸️</button>
      <button className="bg-white text-black mx-4 px-4 py-2 rounded-[20px]" onClick={resume}>Resume</button>
      <button className="bg-white text-black mx-4 px-4 py-2 rounded-[20px]" onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
        restart(time)
      }}>Restart</button>
    </div>
  );
};

export default Timer;