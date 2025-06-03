import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  const audioPlayer = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;

    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);

    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);

    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioPlayer} src="https://moosic.my.mail.ru/file/f252ab577ebb48746966230658656d91.mp3"
             preload="metadata"></audio>
      <button className={styles.forwardBackward}>
        <BsArrowLeftShort /> 30
      </button>
      <button
        className={styles.playPause}
        onClick={togglePlayPause}
      >
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      <button className={styles.forwardBackward}>
        <BsArrowRightShort /> 30
      </button>

      {/* current time */}
      <div className={styles.currentTime}>0:00</div>

      {/* progress bar */}
      <div>
        <input type="range" className={styles.progressBar} />
      </div>

      {/* duration */}
      <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
    </div>
  );
};

export { AudioPlayer };
