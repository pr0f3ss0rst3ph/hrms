import Checkinout from "./Checkinout"

const Defaultwidget = () => {
    return (
        <div className='default-widget'>
            <div className='welcome'>
                Good Morning, Stephon!
            </div>
            <Checkinout />
            <div className='counter'>
                0:00 Hrs
            </div>
        </div>
    )
}

export default Defaultwidget
