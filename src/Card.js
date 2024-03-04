import React from "react"
function Card(){
    return(
<div className ="row">
  <div className="col-sm-4">
    <div className="card text-center bg-primary text-white" >
      <div className="card-body">
        <h5 className="card-title">Card 01</h5>
        <p className="card-text">My favorite food is scrambled eggs.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-center bg-danger text-white" >
      <div className="card-body">
        <h5 className="card-title">Card 02</h5>
        <p className="card-text">My favorite sport is basketball.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-center bg-success text-white" >
      <div className="card-body">
        <h5 className="card-title">Card 03</h5>
        <p className="card-text">I am a sophomore computer science student.</p>
      </div>
    </div>
  </div>
</div>

)
}
export default Card