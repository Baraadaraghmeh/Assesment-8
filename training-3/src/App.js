import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './App.css';

function App() {



  return (
    <div className="container">
    <div className="row">
    <div className="allCards">
      {/* Card 1 */}
<div className="card" style={{width:"18rem"}}>
  <div className="card-body">
    <h3 className="card-title">Card title</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
</div>

{/* Card 2 */}

<div className="card" style={{width:"18rem"}}>
  <div className="card-body">
    <h3 className="card-title">Card title</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" className="btn btn-primary">Primary</button>
  </div>
</div>

{/* Card 3 */}
<div className="card" style={{width:"18rem"}}>
  <div className="card-body">
    <h3 className="card-title">Card title</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" className="btn btn-primary">Primary</button>
  </div>
</div>
</div>


{/* Text Area */}
<div>
<div className="card text-center">
  <div className="card-header">
    <h3> Title</h3>
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button type="button" className="btn btn-primary">Primary</button>
  </div>
  
</div>

   </div>
    </div>
   
    </div>
  );
}

export default App;
