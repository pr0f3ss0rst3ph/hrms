import stephon from '../images/stephon.png'

const Profilemenu = () => {
    return (
        <div className='profilebox'>
            <div className='userdetails'>
                <div className='userimage'>
                    <img alt='profile' src={ stephon } id='profileimg'/>
                </div>
                <div className='usernames'>
                    <div className='userfullname'>
                        Stephon Fraser
                    </div>
                    <div className='username'>
                        @sfraser
                    </div>
                </div>
            </div>
            <div className='profileoptions'>
                <div className='profile-buttons'>Profile</div>
                <div className='profile-buttons'>Account Settings</div>
                <div className='profile-buttons'>Sign out</div>
            </div>
        </div>
    )
}

export default Profilemenu
