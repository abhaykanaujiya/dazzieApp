import React from 'react'
import "./statusCard.css"
import arrowUp from "../../assets/ArrowUp.svg"
import arrowDown from "../../assets/ArrowDown.svg"
const StatusCards =()=> {
  return (
    <div className='wrapper'>
      {[1, 2, 3, 4].map((v, idx) => (
        <div className='statusCardContainer' key={idx}>
          <div className='statusCutomers'>
            <div>cutomer</div>
            <div>1000</div>
          </div>
          <div className='statusIconsContainer'>
            <img className='statusArrowIcon' src={arrowUp} alt='img' />
            <div className='statusCustomerPercentage'>15%</div>

          </div>
        </div>

      ))}
   
    </div>
  )
}


export default StatusCards
