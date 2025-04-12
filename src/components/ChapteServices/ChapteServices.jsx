import React from 'react';
import classes from './ChapteServices.module.scss';
import Data from './ChapteServicesData';
import { useNavigate } from 'react-router-dom';

const ChapteServices = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.services}>
      <div className={classes.titleBlock}>
        <img className={classes.wave} src="/img/wave.png" alt="wave.png" />
        <h1 className={classes.title}>Услуги</h1>
        <hr className={classes.hr} />
      </div>

      <div className={classes.chapter}>
        <div className={classes.servicesContainer}>
            {Data.map((service) => (
                <div key={service.id} className={classes.content}>
                    <h2 className={classes.text}>{service.title}</h2>
                    <p className={classes.description}>{service.description}</p>
                </div>
            ))}
            <button className={classes.button} onClick={() =>navigate('/Services')}><h2>Смотреть все услуги</h2></button>
        </div>
        <img
          className={classes.fonChapter}
          src="/img/ChapteServices.png"
          alt="Фон для услуг"
        />
      </div>
    </div>
  );
};

export default ChapteServices;