import React from 'react';
import './App.css';
import Numberapi from './Numberapi';
import Header from './header';
function App() {
  return (
    <div className="App">
      <Header name='Number Magic'/>
      <Numberapi number='56'/>
    </div>
  );
}

export default App;
