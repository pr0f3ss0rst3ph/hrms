import Navitems from "./Navitems"
import home from '../images/home.png'
import attendance from '../images/attendance.png'
import people from '../images/people.png'
import recruit from '../images/recruit.png'
import org from '../images/org.png'
import vacation from '../images/vacation.png'

const Leftnavbar = () => {
    return (
        <div className='left-nav-bar'>
            <Navitems pageName='Home'
                      icon={ home } 
                      status='active'
            />
            <Navitems pageName='Attendance'
                      icon={ attendance }
                      status='inactive'
            />
            <Navitems pageName='Roster'
                      icon={ people }
                      status='inactive'
            />
            <Navitems pageName='Recruitment'
                      icon={ recruit }
                      status='inactive'
            />
            <Navitems pageName='Org Manager'
                      icon={ org }
                      status='inactive'
            />
            <Navitems pageName='Leave Manager'
                      icon={ vacation }
                      status='inactive'
            />
        </div>
    )
}

export default Leftnavbar
