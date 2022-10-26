import './App.css';
import pic from './images/pic.jpeg'
function App() {
  return (
    <div className="App ">
        <div className='main_div'>
          <div className='profile'>
            <img src={pic} alt="" />
          </div>
          <div className='name text-blue-700'>Girish Kumar</div>
          <div className='degination'>Software Engineer</div>
          <div className='divider'>---------------------------------------</div>
          <div className='social'>fb whtsp linkd</div>
        </div>
    </div>
  );
}

export default App;
