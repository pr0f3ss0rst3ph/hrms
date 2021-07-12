import messageicon1 from '../images/messageicon1.png'
import bell from '../images/bell.png'
import user from '../images/user.png'

const Rightnavbar = () => {



    return (
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
            <img alt='message' src={ messageicon1 } id='messageicon'/> 
            <img alt='notification' src={ bell } id='notificationicon'/>
            <img alt='userprofile' src={ user } id='profileicon'/>
        </div>
    )
}

export default Rightnavbar
