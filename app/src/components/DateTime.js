import React from 'react'
import { useState } from 'react'
import '../components/DateTime.module.css'

function DateTime() {

  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());


  return (
    <p className='date-time'>
      {currentDate} {currentTime}
    </p>
  )
}

export default DateTime
