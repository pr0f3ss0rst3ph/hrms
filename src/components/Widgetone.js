//Summary widget - contains widget title and count (summary)
const Widgetone = ({ title, value }) => {
    return (
        <div className='widgetone'>
            <div className='widget-header'>
                <div className='widget-title'>
                    { title }
                </div>
                <div className='widget-review'>
                    Review
                </div>
            </div>
            <div className='widget-value'>
                { value }
            </div>
            
        </div>
    )
}

export default Widgetone
