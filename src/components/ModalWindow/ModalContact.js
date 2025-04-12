import React from 'react';
import classes from './Modal.module.scss';
import Button from './Button';

const ModalContact = ({ onClose }) => {
  return (
    <div className={classes.modal}>
      <button className={classes.closeButton} onClick={onClose}>
        X
      </button>
      <h2 className={classes.modalTitle}>Вы можете связаться с нами</h2>
      <p>Наш номер телефона: +7 (347)343-64-45</p>
      <p>Наш адрес: Россия, г. Стерлитамак, ул. Николаева, зд. 124</p>
      <p>Наши социальные сети:</p>
      <p>Ответы на вопросы в течении 5 минут</p>
      <Button onClick={onClose}>Вперед</Button>
    </div>
  );
};

export default ModalContact;