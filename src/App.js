import LogRocket from 'logrocket';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide'

LogRocket.init('wmdpup/hrms');


const App = () => {
  return (
    <div className='appBody'>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
