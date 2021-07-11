import { useState } from 'react'
import Rightnavbar from "./Rightnavbar"
import Contentbody from "./Contentbody"

const RightSide = () => {
    const [toggle, setToggle] = useState(0)
    
    if(toggle === 0){
        console.log('Toggle Init')
    }
    else if(toggle === 1){
        console.log('Toggle ' + toggle + ' Received!')
    }

    return (
        <div className='rightside'>
            <Rightnavbar togglePopups={ () => setToggle() }/>
            <Contentbody toggle={ 'send' }/>
        </div>
    )
}

export default RightSide
