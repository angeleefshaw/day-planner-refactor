import React from 'react';
import { Form, Col, Button } from "react-bootstrap";
import { render } from 'react-dom';
import '../styles/Tasks.css';


class Tasks extends React.Component () {
  state = {
    value: 0
  };

  handleSave =() => {
    const input = this.val().trim()
    console.log(input)
  }

  render() {
  return (
    <div className= "tasks">
      <Form className="col-one-content save-item">
        <Form.Row className="row">
          <Col className = "col-1">
            <Form.Control placeholder="9am" />
          </Col>
          <Col  className="col-8">
            <Form.Control placeholder="Enter Task Here" />
          </Col>
          <Col className="col-1">
            <button type="click" className="form-control save-btn" onClick={this.handleSave}><i className="fas fa-save"></i></button>
          </Col>
        </Form.Row>
        <br></br>
        <div className="col-10 smll-row">
          <h3>My Tasks:</h3>
          <ol> 
          </ol>
        </div>
      </Form>
    </div>
  )
}
}

export default Tasks;




// <body>
// <div className="container">
//   <Form className="col-one-content save-item" >
//      <div className="form-row rows">
//        <div className="col-1">
//          <input type="text" className="form-control" placeholder="9am"></input>
//        </div>
//        <div classNameNAme="col-10">
//          <input type="text" className="form-control task" placeholder=""></input>
//        </div>
   
//        <div className="col-1">
//          <button type="click" className="form-control save-btn"><i className="fas fa-save"></i></button> 
//        </div>
//      </div>
//      <br></br>
//      <div className="col-10 smll-row">
//        <h3>My Tasks:</h3>
//          <ol> 
//          </ol>
//      </div>
//    </Form>
//  </div>
// </body>

     