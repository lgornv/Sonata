import React from 'react';
import classes from './AboutUs.module.scss';
import AboutUsData from './AboutUsData';
import { useNavigate } from 'react-router-dom';

const Section = ({ title, text }) => (
    <section className={classes.section}>
        {title && (
            <>
                <h2 className={classes.sectionTitle}>{title}</h2>
                <span className={classes.sectionText}>{text}</span>
            </>
        )}
    </section>
);

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <div className={classes.pageContainer}>
            <h1 className={classes.slogan}>{AboutUsData.slogan}</h1>
            <img className={classes.logo} onClick={() => navigate('/')} src="/img/Logo.svg" alt="Logo.svg"/>

            <main className={classes.mainContent}>
                <p className={classes.mainText}>
                    <span className={classes.sonataColor}>{AboutUsData.mainText.sonataText}</span>
                    <span className={classes.restOfTextColor} dangerouslySetInnerHTML={{__html: AboutUsData.mainText.restOfText}}/>
                </p>
                {AboutUsData.sections.map((section, index) => (
                    <Section key={index} title={section.title} text={section.text}/>
                ))}
            </main>
        </div>
    );
}

export default AboutUs;