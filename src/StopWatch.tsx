import { useEffect, useState } from "react";
import Display from "./Display";
import styles from "./StopWatch.module.css";

export default function StopWatch() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  function startStopWatch() {
    setIsActive(true);
  }

  function stopStopWatch() {
    setIsActive(false);
    console.log(123);
  }

  function resetStopWatch() {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  useEffect(() => {
    let interval: number = 0;
    if (isActive) {
      interval = window.setInterval(() => {
        // Оновлення секунд кожну секунду
        let sec = seconds + 1;
        let min = minutes;
        let hr = hours;

        if (sec === 60) {
          sec = 0;
          min++;
        }
        if (min === 60) {
          min = 0;
          hr++;
        }
        setSeconds(sec);
        setMinutes(min);
        setHours(hr);
      }, 1000);
    } else {
      window.clearInterval(interval);
    }
    return () => window.clearInterval(interval);
  }, [isActive, hours, minutes, seconds]);

  return (
    <div className={styles.wrapper}>
      <Display
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        startStopWatch={startStopWatch}
        stopStopWatch={stopStopWatch}
        resetStopWatch={resetStopWatch}
      />
    </div>
  );
}
