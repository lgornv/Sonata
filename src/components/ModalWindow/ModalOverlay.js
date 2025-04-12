import React from 'react';
import classes from './Modal.module.scss';

const ModalOverlay = ({ onClose }) => {
  return <div className={classes.modalOverlay} onClick={onClose}></div>;
};

export default ModalOverlay;