import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './components/Greeting';
import './App.css';

const App = () => {
  const [name, setName] = useState([]);

  return (
      <div className="container">
          <>
            <input
              onChange={({target: {value}}) => setName(value)}
              placeholder="Enter your name"
              className="input"
            />
            <Greeting name={name}/>
          </>
      </div>
  );
}

export default App;
