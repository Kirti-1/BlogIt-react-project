import { useState } from "react";

// Custom Hook returns an object with the value and the onChange handler function 


export const useFormCustom = (initialValue) => {
    const [val, setVal] = useState(initialValue);
    const onHandleChange = (e) =>{
        setVal(e.target.value);
    } 

    return{
        val,
        onChange:onHandleChange
    }
}
