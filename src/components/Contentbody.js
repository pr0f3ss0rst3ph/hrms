import Smallmenu from "./Smallmenu"
import Defaultwidget from "./Defaultwidget"
import Widgetone from "./Widgetone"

const Contentbody = ({ toggle, box }) => {

    console.log(toggle + ' and ' + box + ' Received!')
    //Possibilities: messageicon, notificationicon, profileicon
    //<Smallmenu type='messages'/>

    return (
        <div className='content-body'>
            {toggle === 1 ? 
             box === 'messageicon' ? <Smallmenu type='messages'/> : 
             box === 'notificationicon' ? <Smallmenu type='notifications'/> : 
             box === 'profileicon' ? <Smallmenu type='profile'/> : '' : ''}

             {/*Home Page Top Block*/}
             <Defaultwidget />
             <Widgetone title='New Employees' value='5'/>
             <Widgetone title='Current Employees' value='98'/>

        </div>
    )
}

export default Contentbody
