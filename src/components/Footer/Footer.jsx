import React from 'react';
import classes from './Footer.module.scss';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = ({ openContactModal }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.up}>
        <img className={classes.footerLogo} src="/img/Logo.svg" alt="Sonata Logo" />
        <button className={classes.ctaButton} onClick={openContactModal}>
          <h2>Свяжемся с вами?</h2>
        </button>
      </div>
      <div className={classes.down}>
        <div className={classes.contactInfo}>
          <p>
            <img className={classes.img} src="/img/Point.svg" alt="Point.svg" />
            Россия, г.Стерлитамак, ул.Николаева, зд.124
          </p>
          <p>
            <img className={classes.img} src="/img/Phone.svg" alt="Phone.svg" />
            +7 (347) 343-64-45
          </p>
        </div>
        <SocialMedia />
      </div>
      <hr className={classes.hr} />
      <div className={classes.copyright}>
        <p>SONATA 2024-2025 ©</p>
      </div>
    </footer>
  );
};

export default Footer;