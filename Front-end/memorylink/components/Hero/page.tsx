'use client'

import React, { use } from 'react';
import { useStyles } from './style/style';

const Hero = () => {

  const {styles}=useStyles();
    
  return (
    <div className={styles.main}>Hero</div>
  )
}

export default Hero