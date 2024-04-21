'use client'

import React from 'react'
import { useStyles } from './style/style'

const About = () => {

  const {styles}=useStyles();

  return (
    <div className={styles.main}>About</div>
  )
}

export default About