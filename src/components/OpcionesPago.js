import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import iconPerson from '../assets/iconPerson.svg'
import iconDollar from '../assets/iconDollar.svg'
import { useForm } from "../hooks/useForm";
import { useSelector } from "react-redux";
import { errorTrue, onChangeValues, resetedTipAndBill } from '../actions/calculator'



const OpcionesPago = () => {


  const [values, handleInputChange, reset, handleInputClick, handleCustomChange] = useForm({
    bill: '',
    tipPercent: 0,
    persons: 1,
    custom: false
  })


  const dispatch = useDispatch()
  const {resetear} = useSelector(state => state.calculator)

  
  useEffect(() => {

    if (parseFloat(values.bill) >= 1 && parseFloat(values.tipPercent) >= 0 && parseFloat(values.persons) >= 1) {

      console.log('aa')
      
      dispatch(onChangeValues(parseFloat(values.tipPercent), parseFloat(values.bill), parseFloat(values.persons)))
      
    } else {
      dispatch(errorTrue())      
    }

      
  }, [values, dispatch])

  useEffect(() => {

    if (resetear) {
      reset()
      dispatch(resetedTipAndBill())
    }

  }, [resetear, dispatch, reset])



  console.log(values.bill)

  return (
    <div className="opciones-de-pago">
      <div className="opciones-de-pago__number-people">
        <label className="bill-label-color">Bill</label>
        <div className="opciones-de-pago__number-people--input">
            
            <input 
            onChange={handleInputChange} 
            className={(parseFloat(values.bill) <= 0) ? 'is-invalid' : 'opciones-de-pago__number-people--input_i' } 
            value={values.bill} 
            name='bill' 
            type="number" 
            placeholder="0" 
            min={1} 
            step="0.01"/>

            <img className="input-icon" src={iconDollar} alt="Dolar"/>

        </div>
      </div>

      <div className="opciones-de-pago__select-tip">
        <label className="bill-label-color">Select tip</label>
        <div className="row opciones-de-pago__select-tip--buton-group">
          <button onClick={() => handleInputClick(5, 'tipPercent')} name='tipPercent' className="col-md-4 col-6 mr">5%</button>
          <button onClick={() => handleInputClick(10, 'tipPercent')} name='tipPercent' className="col-md-4 col-6 mx">10%</button>
          <button onClick={() => handleInputClick(15,'tipPercent')} name='tipPercent' className="col-md-4 col-6 ml">15%</button>
          <button onClick={() => handleInputClick(25, 'tipPercent')} name='tipPercent' className="col-md-4 col-6 mr">25%</button>
          <button onClick={() => handleInputClick(50, 'tipPercent')} name='tipPercent' className="col-md-4 col-6 mx">50%</button>
          
          <input 
          onChange={handleCustomChange} 
          className={((parseFloat(values.tipPercent) <= -1) ? 'input-button-invalid' : 'opciones-de-pago__select-tip--buton-group--input') + ' col-4 ml'}
          value={(values.custom) && values.tipPercent }  
          name='tipPercent' 
          type="number"
          min={1} 
          placeholder="Custom"/>

        </div>
      </div>

      <div className="opciones-de-pago__number-people">
        <label className="bill-label-color">Number of People</label>
        <div className="opciones-de-pago__number-people--input">

            <input 
            onChange={handleInputChange} 
            className={(parseFloat(values.persons) <= 0) ? 'is-invalid' : 'opciones-de-pago__number-people--input_i' }
            value={values.persons} 
            name='persons' 
            type="number" 
            placeholder="0" 
            min={1} /> 
            
            <img className="input-icon" src={iconPerson} alt="Persona"/>

        </div>
      </div>
    </div>
  );
};

export default OpcionesPago;
