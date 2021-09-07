import React, { useState} from 'react'
import './App.css';
import axios from '../node_modules/axios/index';

function App() {
  const [data, setData] = useState("");
  const onClick = async() => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=cb4555c8522743e995a574b229d36f8c')
      setData(response.data)

    } catch(e) {
      console.log(e);
    }
  } 
  return (
    <div>
      <div>
        <button onClick={onClick}>get datas</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, "", 2)} readOnly={true}></textarea>}
    </div>
  );
}

export default App;
