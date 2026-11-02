import { useEffect, useState } from "react";
import "./app.css";

export default function App() {

  const [totalSecond, setTotalSecond] = useState(120);
  const [isLoader, setIsLoader] = useState(false);

  const minute = Math.floor(totalSecond / 60);
  const second = totalSecond % 60;

  useEffect(() => {

    if (totalSecond <= 0) {
      return;
    }

    const timeInterval = setInterval(() => {
      setTotalSecond(state => state - 1);
    }, 1000);

    return () => clearInterval(timeInterval);

  }, [totalSecond]);

  return (
    <>

      <p className="heading">OTP Verification</p>

      <center className="otp-container">

        <h2 className="card-title">Verify Your Identity</h2>

        <p className="card-description">
          Please wait until the timer ends to resend your OTP.
        </p>

        <button
          className="otp-button"
          disabled={totalSecond !== 0 || isLoader}
          onClick={() => {
            setIsLoader(true);

            setTimeout(() => {
              setTotalSecond(120);
              setIsLoader(false);
            }, 2000);
          }}
        >

          {totalSecond !== 0 && (
            <p className="timer">
              {minute}:{second < 10 ? "0" : ""}{second}
            </p>
          )}

          {totalSecond === 0 && (
            <p className="resend-text">
              {isLoader ? "Sending..." : "Resend OTP"}
            </p>
          )}

        </button>

      </center>

    </>
  );
}
