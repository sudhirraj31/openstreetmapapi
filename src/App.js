import React, {useState} from 'react';
import './App.css';
import Map from './Map';
import Search from './Search';

function App() {
  const [selectSearch, setSelectSearch] = useState(null);
  console.log(selectSearch);

  return (
    <div className="App">
      <div className='map'>
        <Map selectSearch={selectSearch}/>
      </div>
      <div className='search'>
        <Search setSelectSearch={setSelectSearch} />
      </div>
    </div>
  );
}

export default App;
