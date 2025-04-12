import React, { useState } from 'react';
import servicesData from "./ServicesData";
import classes from './Services.module.scss';
import ModalSubscribed from '../../components/ModalWindow/ModalSubscribed';
import ModalUnsubscribed from '../../components/ModalWindow/ModalUnsubscribed';

const Services = () => {
  const [subscribedItems, setSubscribedItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const getRandomAnimationDuration = () => {
    return Math.random() * 5 + 5;
  };

  const formatPrice = (price) => {
    const parts = price.split(" ");
    return (
      <>
        <span>{parts[0]}</span>
        <span className={classes.priceSpace}>{parts[1]}</span>
      </>
    );
  };

  const handleItemClick = (sectionIndex, itemIndex) => {
    setShowModal(true);
    setIsSubscribed(prevIsSubscribed => !prevIsSubscribed);
    setSubscribedItems(prevItems => ({
        ...prevItems,
        [`${sectionIndex}-${itemIndex}`]: !prevItems[`${sectionIndex}-${itemIndex}`]
    }));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.Page}>
      {servicesData.map((section, sectionIndex) => (
        <div className={classes.section} key={sectionIndex}>
          <img className={classes.wave} src="/img/AudioWave.png" alt="Audio Wave" />
          <h1 className={classes.title}>{section.title}</h1>
          <hr className={classes.hr} />

          <div className={classes.items}>
            {section.items.map((item, itemIndex) => {
              const animationDuration = getRandomAnimationDuration();
              const isCurrentlySubscribed = subscribedItems[`${sectionIndex}-${itemIndex}`] || false;

              return (
                <div key={itemIndex}>
                  <h2 className={classes.nameItem} style={{ animationDuration: `${animationDuration}s` }}>{item.name}</h2>
                  <button
                    className={classes.item}
                    onClick={() => handleItemClick(sectionIndex, itemIndex)}
                  >
                    <h1 className={classes.price}>{formatPrice(item.price)}</h1>
                    <p className={classes.description}>{item.description}</p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {showModal && (
          isSubscribed ? (
              <ModalSubscribed onClose={closeModal} />
          ) : (
              <ModalUnsubscribed onClose={closeModal} />
          )
      )}
    </div>
  );
};

export default Services;