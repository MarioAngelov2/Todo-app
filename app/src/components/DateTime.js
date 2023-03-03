import React from 'react'
import { useState } from 'react'

function DateTime() {

  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());



  return (
    <p>
      {currentDate} {currentTime}
    </p>
  )
}

export default DateTime
