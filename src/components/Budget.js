import React, { useContext  } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const changeBudget=(val)=>{
        const totalExpenses = expenses.reduce((total,item)=>{
            return(total+=item.cost);
        }, 0)

        if (val < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending!');
        } else if(val>20000){
            alert('The budget cannot be more than 20,000!')
        }
        
        else{
            dispatch ({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    };

    return(
        <div className="alert alert-secondary">
           
            <label>Budget: {currency}</label>
            <input 
                type="number" onInput={(e)=>changeBudget(e.target.value)}  
                value={budget} step={10} style={{width: '120px'}}/>
            
        </div>
    );
};

export default Budget;