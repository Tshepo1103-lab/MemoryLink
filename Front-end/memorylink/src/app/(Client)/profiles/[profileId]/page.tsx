'use client'
import React from 'react'
import PatientDetailsPage from '../../../../../components/patientdetails/page'
import { useStyles } from '../style/style'

const ProfileDetails = () => {

  const {styles}= useStyles();

  return (
    <div className={styles.main}>
      <PatientDetailsPage/>
    </div>
  )
}

export default ProfileDetails