import React, { useState } from "react";
import styles from "../styles/AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.audioPlayer}>
      <audio src="https://moosic.my.mail.ru/file/f252ab577ebb48746966230658656d91.mp3" preload="metadata"></audio>
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
      <div className={styles.duration}>3:19</div>
    </div>
  );
};

export { AudioPlayer };
