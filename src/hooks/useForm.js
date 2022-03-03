import { useState } from 'react';




export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    const handleCustomChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value,
            custom: true
        });

    }

    const handleInputClick = (num, name) => {

        setValues({
            ...values,
            [name]: num,
            custom: false
        })

    }

    return [ values, handleInputChange, reset, handleInputClick, handleCustomChange];

}