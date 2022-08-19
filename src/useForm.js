import React, { useState } from "react";


export function useForm(initialValues){
 const [values, setValues] = useState(initialValues);

 return[values, e => {
    setvalues({
        ...values,
        [e.target.name]: e.target.value
    })
 }]
}