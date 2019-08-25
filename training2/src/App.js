import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './App.css';

function App() {
  return (
    // <div className="App">

      
      <div className="card" style={{width : "30rem"}}>
        <span>
      <img src="https://picsum.photos/100/100" className="rounded mx-auto mr-left" style={{marginLeft :"0"}}  alt="..."></img>
      </span>
    <div className="card-body">
    <h5 className="card-title">Baraa daraghmeh</h5>
    
    <p className="card-text">Some quick example text to build on the card title and make .</p>
    <a href="App" className="card-link">Like</a>
    <a href="App" className="card-link">comment</a>
  </div>
</div>
    // </div>
  );
}

export default App;
