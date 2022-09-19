import PlayingField from '../PlayingField/PlayingField';
import Arrows from '../Arrows/Arrows';
import './App.css';


function App() {
  return (
    <>
      <div className='container'>
        <PlayingField />
        <Arrows />
      </div>
    </>
  );
}

export default App;
