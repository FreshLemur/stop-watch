import styles from "./StopWatch.module.css";

interface DisplayProps {
  hours: number;
  minutes: number;
  seconds: number;
  startStopWatch: () => void;
  stopStopWatch: () => void;
  resetStopWatch: () => void;
}

const Display: React.FC<DisplayProps> = ({
  hours,
  minutes,
  seconds,
  startStopWatch,
  stopStopWatch,
  resetStopWatch,
}) => {
  return (
    <div className={styles.display}>
      <section className={styles.stopWatch}>
        {hours}:{minutes}:{seconds}
      </section>
      <section className={styles.stopWatch}>
        <button
          className={styles.stopWatchButton}
          onClick={() => startStopWatch()}
        >
          Start
        </button>
        <button
          className={styles.stopWatchButton}
          onClick={() => stopStopWatch()}
        >
          Stop
        </button>
        <button
          className={styles.stopWatchButton}
          onClick={() => resetStopWatch()}
        >
          Reset
        </button>
      </section>
    </div>
  );
};
export default Display;
