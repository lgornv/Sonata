import React from 'react';
import classes from './Chapter.module.scss';

const Chapter = ({ title, imageUrl, content }) => {
  return (
    <div className={classes.advantages}>
      <div className={classes.titleBlock}>
        <img className={classes.wave} src="/img/wave.png" alt="wave.png" />
        <h1 className={classes.title}>{title}</h1>
        <hr className={classes.hr} />
      </div>

      <div className={classes.chapter}>
        <img className={classes.fonChapter} src={imageUrl} alt="chapter1.png" />
        <div className={classes.content}>
          {content.map((item, index) => (
            <h2 className={classes.text} key={index}>{item}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapter;