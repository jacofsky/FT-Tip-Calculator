import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { resetTipAndBill } from '../actions/calculator'



const Total = () => {

  const {tipAmount, total, error} = useSelector((state) => state.calculator)

  const dispatch = useDispatch()

  const handleReset = () => {

    dispatch(resetTipAndBill())

  }

  return (
    <div className='total'>
      <div>
      <div className='tip-box mb-4'>
        <div className='tip-box__info'>
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>

          <p className='tip-box__amount'>  
          
          {(isNaN(tipAmount) || tipAmount === Infinity || !error ) ? tipAmount.toFixed(2) : '-.--'}
          
          </p>

      </div>

      <div className='tip-box mt-4'>
        <div className='tip-box__info'>
          <p>Total</p>
          <span>/ person</span>
        </div>
          
          <p className='tip-box__amount'>
            {(isNaN(total) || total === Infinity || !error) ? total.toFixed(2) : '-.--'}
          </p>

      </div>
      </div>
      

      <button onClick={handleReset} className='reset--buton'>RESET</button>
    </div>
  )
}

export default Total