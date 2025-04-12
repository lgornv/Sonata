import React, { useState, useEffect } from 'react';
import classes from './Modal.module.scss';

const ModalSubscribed = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [timerWidth, setTimerWidth] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
    }, 3000);

    const interval = setInterval(() => {
      setTimerWidth((prevWidth) => Math.max(0, prevWidth - (100 / 30)));
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleAnimationEnd = () => {
    if (isClosing) {
      onClose();
    }
  };

  return (
    isVisible ? (
      <div
        className={`${classes.modal} ${classes.modalBottomRight} ${isClosing ? classes.modalFadeOut : ''}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <h2 className={classes.modalTitle}>Вы записаны на услугу</h2>
        <div className={classes.timerLine} style={{ width: `${timerWidth}%` }} />
      </div>
    ) : null
  );
};

export default ModalSubscribed;