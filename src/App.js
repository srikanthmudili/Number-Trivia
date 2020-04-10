import React, { useState } from 'react';
import './App.css';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
function App() {
  const [input, setInput] = useState('');
  const [result,setResult] = useState('');

 function route  ()  {
      Axios('http://numbersapi.com/' + input)
        .then(
          res => (
            console.log(res.data),
            setResult(res.data)
        ))
        .catch(function (error) {
          console.log(error);
        })
  }
  return (
    <div className="App">
      <Header name='Number Magic' />
      <br></br>
      <div className="container">
      <div className="row">
      <div className="col-sm-10">
      <div className='col-xs-1'>
      <label className="label label-default">Give a number</label>
      
      <input  className="form-control input-group-lg col-xs-1" type='text' value={input} onChange={(event) => (
        setInput(event.target.value))}>
      </input>
      </div>
      <br/>
      <button  className="btn btn-info" onClick={route}>submit</button>
      
      </div>
      <div className="col-sm-2 sidenav">
        <div>
        <button className="btn btn-primary">Date Facts</button>
        </div>
        <br></br>
        <div>
        <button  className="btn btn-primary">Year Facts</button>
        </div>
        <br></br>
        <div>
        <button  className="btn btn-primary">Math Facts</button>
        </div>

      </div>
      
      </div>
      </div>
    </div>
  );
}


export default App;
