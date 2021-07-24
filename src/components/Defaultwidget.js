import { useState } from 'react'
import addwidget from "../images/addwidget.png"

const Defaultwidget = () => {
    //useState hook [setCheck] used to toggle between 1 and 0
    const [check, setCheck] = useState(0)
    //checkDetails change based on toggle
    let checkDetails = {
        classname: "check-in",
        name: "Check In" //For now, check in is the default. This will change with session.
    }
    
    //Changes values of the checkDetails properties accroding to user interaction
    if(check === 0){
        checkDetails.classname = "check-in";
        checkDetails.name = "Check In";
    }
    else if (check === 1){
        checkDetails.classname = "check-out";
        checkDetails.name = "Check Out"
    }
    
    //Function that will run when button is clicked.
    const getTrigger = () => {
       
       //Initially, sets counter to check inrement 1. (Values are either 1 or 2)
       let counter = check + 1;
        
        //Once the remainder of counter / 2 is 0, we set check to 0 (false), else 1 (true)
        if(counter % 2 === 0){
           setCheck(0)
           console.info(counter + ' Counter Even : Number set to ' + check)
           
       }
       else if(counter % 2 !== 0){
           setCheck(1)
           console.info(counter + ' Counter Odd - Number set to ' + check)
       }
    }

    return (
        <div className='default-widget'>
            <div className='welcome'>
                Good Morning, Stephon!
            </div>
            <div className={ checkDetails.classname } onClick={ getTrigger }>
                { checkDetails.name }
            </div>
            <div className='counter'>
                0:00 Hrs
            </div>
            <img alt='add' src={ addwidget } id='add-widget' /> 
        </div>
    )
}

export default Defaultwidget
