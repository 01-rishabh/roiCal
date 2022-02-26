import React from 'react'
import './TimeFrame.css'


function TimeFrame() {
  return (
    <div>
        <h4>Timeframe</h4>
        <div className="timeFrame-options">

        <div className='time-options' tabIndex={"-1"}>1 Day</div>
        <div className='time-options' tabIndex={"-1"}>7 Days</div>
        <div className='time-options' tabIndex={"-1"}>30 Days</div>
        <div className='time-options' tabIndex={"-1"}>1 Year</div>
        <div className='time-options' tabIndex={"-1"}>5 Year</div>
        </div>
    </div>
  )
}

export default TimeFrame