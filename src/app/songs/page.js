
"use client";

import React, { useState, useRef } from 'react';
import styles from './songs.module.css';

const Songs = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const audioRef = useRef(null);
  
    const togglePlayPause = () => {
      if (audioRef.current.paused || audioRef.current.ended) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className={styles.screen}>
      <input
        type="checkbox"
        id="magicButton"
        checked={isMenuOpen}
        onChange={toggleMenu}
        className={styles.magicButton}
      />
      <label className={styles.main} htmlFor="magicButton"></label>

      <div className={styles.coverImage}></div>
      <div className={styles.search}></div>
      <div className={styles.bodyPlayer}></div>


      <div className={styles.bar}></div>

      <div className={styles.info}>
        <h4>STRESSED OUT</h4>
        <h3>twenty one pilots - Blurryface</h3>
      </div>

      <audio ref={audioRef} preload="auto" controls>
        <source src="http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3" type="audio/mpeg" />
        <source src="http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg" type="audio/ogg" />
      </audio>

      <table className={styles.player}>
        <tbody>
          <tr>
            <td>
              <button className={styles.backward}></button>
            </td>
            <td>
              <button
                className={styles.play}
                onClick={togglePlayPause}
                title={isPlaying ? "Pause" : "Play"}
              ></button>
            </td>
            <td>
              <button className={styles.forward}></button>
            </td>
          </tr>
        </tbody>
      </table>

    {/* footer  */}

      <div className={styles.current}>
        <h2>STRESSED OUT</h2>
      </div>
    </div>
  );
};

export default Songs;