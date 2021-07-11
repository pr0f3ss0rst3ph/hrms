import Smallmenu from "./Smallmenu"

const Contentbody = ({ toggle, box }) => {

    console.log(toggle + ' and ' + box + ' Received!')
    //Possibilities: messageicon, notificationicon, profileicon
    //<Smallmenu type='messages'/>

    return (
        <div className='content-body'>
            {toggle === 1 ? box === 'messageicon' ? <Smallmenu type='messages'/> : box === 'notificationicon' ? <Smallmenu type='notifications'/> : '' : ''}
        </div>
    )
}

export default Contentbody
