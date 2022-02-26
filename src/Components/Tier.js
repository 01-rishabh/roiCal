import React from 'react'
import './TimeFrame.css'

function Tier() {
  return (
    <div>
        <h4>Select Tier</h4>
        <div className="selectTier-options">

        <div className='tier-options' tabIndex={"-1"}>Tier 1</div>
        <div className='tier-options' tabIndex={"-1"}>Tier 2</div>
        <div className='tier-options' tabIndex={"-1"}>Tier 3</div>
        <div className='tier-options' tabIndex={"-1"}>Tier 4</div>
        <div className='tier-options' tabIndex={"-1"}>Tier 5</div>
        </div>
    </div>
  )
}

export default Tier