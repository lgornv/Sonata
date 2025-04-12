import React from 'react'
import classes from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={classes.banner}>
      <img className={classes.img} src="/img/Studioimg.png" alt="Studioimg.png" />
      <h1 className={classes.text}>Студия звукозаписи</h1>
    </div>
  )
}

export default Banner