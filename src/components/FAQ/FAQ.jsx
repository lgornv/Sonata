import React, { useState } from 'react';
import Data from './FAQData';
import classes from './FAQ.module.scss';

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={classes.faqContainer}>
      <div className={classes.titleBlock}>
        <img className={classes.wave} src="/img/wave.png" alt="wave.png" />
        <h1 className={classes.title}>FAQ</h1>
        <hr className={classes.hr} />
      </div>
      {Data.map((item, index) => (
        <div className={classes.faqItem} key={index}>
          <div className={classes.faqQuestion}  onClick={() => toggleQuestion(index)}>
            <h2 className={classes.questionText}>{item.question}</h2>
            <h1 className={classes.toggleIcon}>{expandedIndex === index ? '-' : '+'}</h1>
          </div>
          {expandedIndex === index && (
            <div className={classes.faqAnswer}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;