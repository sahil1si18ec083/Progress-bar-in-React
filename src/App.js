import "./styles.css";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";
import { useRef } from "react";
export default function App() {
  const [progress, setProgress] = useState(0);
  const totalMs = 10 * 1000;
  const interval = 1 * 1000;
  const seconds = totalMs / interval;
  const progressMade = (interval / totalMs) * 100;
  const cycles = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === cycles.current) {
        clearInterval(timer);
      } else {
        setProgress((prev) => prev + progressMade);
        cycles.current = cycles.current + 1;
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="App">
      <ProgressBar progress={progress} />
    </div>
  );
}
