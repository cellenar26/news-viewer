import React, { useState} from 'react'
import './App.css';
import axios from '../node_modules/axios/index';

function App() {
  const [data, setData] = useState("");
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
          setData(response.data)
        })
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
