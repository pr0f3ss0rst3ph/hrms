//Summary widget - contains widget title and count (summary)
const Widgetone = ({ title, value }) => {
    return (
        <div className='widgetone'>
            <div className='widgetone-header'>
                <div className='widgetone-title'>
                    { title }
                </div>
                <div className='widgetone-review'>
                    Review
                </div>
            </div>
            <div className='widgetone-value'>
                { value }
            </div>
            
        </div>
    )
}

export default Widgetone
