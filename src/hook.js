import { useState } from "react";

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
