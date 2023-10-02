//import React, { useState  } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = ()=>{
    const {dispatch} = useContext(AppContext);
    
    const changeCurrency =(val)=>{ 
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    };


return(
    <div className="alert alert-secondary">
        <span>Currency </span>
            <select onChange={(e)=>changeCurrency(e.target.value)}
                className="btn btn-success dropdown toggle"
                id="currency"
            >
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Ruppee</option>
            </select>
        
    </div>
)
};
export default Currency;