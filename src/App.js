import React  from 'react';
import './App.css';
import Header from './comp/header.js'
import Navi from './comp/navi.js'
import Middle from './comp/middle.js'
import Bas from './comp/bas.js'
function App() {
  return (
    <div className="App">
     <Header />
     <Navi/>
     <Middle/>
     <Bas/>
    </div>
  );
}

export default App;
