import { useState } from 'react'
import LogRocket from 'logrocket';
import Sitename from "./components/Sitename"
import Leftnavbar from "./components/Leftnavbar"
import Contentbody from "./components/Contentbody"
import messageicon1 from './images/messageicon1.png'
import bell from './images/bell.png'
import user from './images/user.png'

LogRocket.init('wmdpup/hrms');


const App = () => {

  const [number, setNumber] = useState(0)
  const [box, setBox] = useState('')
    
    const getNumber = (e) => {
       setBox(e.target.getAttribute('id'))
       
       let counter = number + 1;

        if(counter % 2 === 0){
           setNumber(0)
           console.info(counter + ' Counter Even : Number set to ' + number + box)
           console.info(box)
           
       }
       else if(counter % 2 !== 0){
           setNumber(1)
           console.info(counter + ' Counter Odd - Number set to ' + number + box)
           console.info(box)
       }
    }

  return (
    <div className='appBody'>
        <div className='leftside'>  {/*LEFT SIDE*/}
          <Sitename />  
          <Leftnavbar />
        </div>
        <div className='rightside'> {/*RIGHT SIDE*/}
           <div className='right-nav-bar'>
             <div className='page-name'>
                 Home
             </div>
             <div className='search-bar-box'>
                  <input type='text' name='search' id='search' placeholder='Search' />
             </div>
             <div className='access-type'>
                 HR View
             </div>
              <img alt='message' src={ messageicon1 } id='messageicon' onClick={ getNumber } /> 
              <img alt='notification' src={ bell } id='notificationicon' onClick={ getNumber } />
              <img alt='userprofile' src={ user } id='profileicon' onClick={ getNumber } />
           </div>
           <Contentbody toggle={ number } box={ box }/>
      </div>
    </div>
  );
}

export default App;
