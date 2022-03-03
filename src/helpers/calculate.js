export const calculateBill = (tipPerPerson, bill, persons) => {

    const division = bill / persons

    return division + parseFloat(tipPerPerson)
        
}

export const calculateTip = (tip, bill, persons) => {
    
    const porcentaje = ((bill * tip) / 100) / persons

    return Math.round(porcentaje)

}