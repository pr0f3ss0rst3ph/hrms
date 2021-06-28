
const Navitems = ({ pageName, icon, status }) => {
    if(status === 'active'){
        return (
        <div className='active-nav-item'>
            <span className='image-container'>
                <img alt='home' src={ icon } id='item-image'/>
            </span>
            <div className='nav-item-text'> { pageName } </div>
        </div>
    )
    }
    else{
        return (
        <div className='nav-item'>
            <span className='image-container'>
                <img alt='home' src={ icon } id='item-image'/>
            </span>
            <div className='nav-item-text'> { pageName } </div>
        </div>
    )
    }
    
}

export default Navitems
