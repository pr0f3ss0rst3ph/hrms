import { Pie } from 'react-chartjs-2';

const Widgetthree = ({ title, value }) => {

    const data = {
        labels: ['Dept 1', 'Dept 2', 'Dept 3', 'Dept 4'],
        datasets: [
            {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                '#1B24FF',
                '#4AC5EC',
                '#2B5B76',
                '#C7F1FE',
            ],
            borderColor: [
                '#1B24FF',
                '#4AC5EC',
                '#2B5B76',
                '#C7F1FE',
            ],
            borderWidth: 1,
            },
        ],
    };

    const options = {
        legend: {
            display: true,
            position: 'left'
        }
    };

    
 

    return (
        <div className='widgetthree'>
            <div className='widgetthree-header'>
                <div className='widgetthree-title'>
                    { title }
                </div>
                <div className='widgetthree-review'>
                    Review
                </div>
            </div>
            <div className='widgetthree-value'>
                <Pie data={data} options={options}/>
            </div>
            
        </div>
    )
}

export default Widgetthree
