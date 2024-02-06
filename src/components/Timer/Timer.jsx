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
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    

    return (
        <div style={{textAlign: 'center'}}>
        <h1 className="text-3xl text-center font-bold">Start your workout with timer...⏱️⏱️</h1>
        <div style={{fontSize: '100px'}}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p className="my-4">{isRunning ? 'Running' : 'Not running'}</p>
        <button className="bg-black text-white mx-4 px-4 py-2 rounded-[20px]" onClick={start}>Start ▶️</button>
        <button className="bg-black text-white mx-4 px-4 py-2 rounded-[20px]" onClick={pause}>Pause ⏸️</button>
        <button className="bg-black text-white mx-4 px-4 py-2 rounded-[20px]" onClick={resume}>Resume</button>
        <button className="bg-black text-white mx-4 px-4 py-2 rounded-[20px]" onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time)
        }}>Restart</button>
      </div>
    );
};

export default Timer;