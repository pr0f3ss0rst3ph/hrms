import Smallmenu from "./Smallmenu"
import Defaultwidget from "./Defaultwidget"
import Widgetone from "./Widgetone"
import Widgetthree from "./Widgetthree"

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
             <div className='row-one'>
                <Widgetone title='New Employees' value='5'/>
                <Widgetone title='Current Employees' value='98'/>
                <Widgetthree title='Employees by Department'/>
             </div>
             <div className='row-one'>
             <Widgetone title='Attrition for July' value='3'/>
             <Widgetone title='Applicants' value='2'/>
             </div>

             
             

        </div>
    )
}

export default Contentbody
