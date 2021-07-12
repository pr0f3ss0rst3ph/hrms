import more from '../images/more.png'
import Profilemenu from './Profilemenu'

const Smallmenu = ({ type }) => {

    let menuItems = {
        title: '',
        content: ''
    }

    if(type  === 'messages'){
        menuItems.title = 'Messages'
        menuItems.content = 'No new messages.'
        return (
        <div className='menubox'>
            <div className='menu-box-top'>
                <div className='menu-title'>
                    { menuItems.title }
                </div>
                <div className='menu-more'>
                    <img alt='more' src={ more } id='more' />
                </div>
            </div>
            <div className='menu-body'>
                <div className='menu-details'>
                    { menuItems.content }
                </div>
                <div className='menu-all-details'>
                    View All
                </div>
            </div>
        </div>
    )
    }
    else if (type === 'notifications'){
        menuItems.title = 'Notifications'
        menuItems.content = 'No new notifications'
        return (
        <div className='menubox'>
            <div className='menu-box-top'>
                <div className='menu-title'>
                    { menuItems.title }
                </div>
                <div className='menu-more'>
                    <img alt='more' src={ more } id='more' />
                </div>
            </div>
            <div className='menu-body'>
                <div className='menu-details'>
                    { menuItems.content }
                </div>
                <div className='menu-all-details'>
                    View All
                </div>
            </div>
        </div>
    )
    }
    else if (type === 'profile'){
        menuItems.title = 'Hello, User!'
        return (
        <>
        <Profilemenu />
        </>
    )
    }
}

export default Smallmenu
