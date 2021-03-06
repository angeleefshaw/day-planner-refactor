
import React, { useState } from 'react';
import { Form, Col } from "react-bootstrap";
import '../styles/Tasks.css';


 function Tasks(props) {
   const [taskState, setTaskState] = useState({
     list:""
    });

 
    return (
      <div className= "tasks">
        <Form className="col-one-content save-item">
            <Form.Row className="row">
              <Col className = "col-1">
                <Form.Control placeholder={props.time} />
              </Col>
              <Col  className="col-8">
                <Form.Control placeholder="Enter Task Here"  />
              </Col>
              <Col className="col-1">
                <button onClick = {() => setTaskState({...taskState, list: "where are you"})} type="click" className="form-control save-btn"><i className="fas fa-save"></i></button>
              </Col>
            </Form.Row>
            <br></br>
            <div className="col-10 smll-row">
              <h3>My Tasks:</h3>
              <ol> 
              {taskState.list}
              </ol>
            </div>
          </Form>
      </div>
    );
  }


export default Tasks;


// onClick={() => this.addtask()}
//value = {this.state.tasks}



//
//