import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (<div className="content-wrapper">
  <div class="card bg-primary">
  <div class="card-header">
    <h3 class="card-title">Pembagian Uang</h3>
    </div>
    <div class="card-tools">
  </div>
  <div class="card-body">
  <label>Jumlah Uang</label><br></br>
  <input type="text"  placeholder="Enter ..." id="input">
             
             
  
              
     </input>
           
    </div>
    <div class="card-footer">
    <button type="Submit"  class="btn btn-info">
    Hitung
    </button> 
  </div>
  </div>

  
    </div>
            
      );
  }
}

export default Dashboard;
