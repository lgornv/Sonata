import React from 'react'
import classes from './SocialMedia.module.scss'

const SocialMedia = () => {
    return (
        <div className={classes.socialMedia}>
            <img className={classes.socImg} src="../img/Mail.svg" alt="Mail" /> 
            <img className={classes.socImg} src="../img/tg.svg" alt="tg" /> 
            <img className={classes.socImg} src="../img/Whatsap.svg" alt="Whatsap" /> 
            <img className={classes.socImg} src="../img/Vk.svg" alt="Vk" /> 
        </div>
    )
}

export default SocialMedia