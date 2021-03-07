
import React, { useState } from 'react';
import { Form, Col } from "react-bootstrap";
import '../styles/Tasks.css';


 function Tasks(props) {
   const [taskState, setTaskState] = useState("")

     function handleSubmit(e) {
       e.preventDefault();
     }

     function handleTask (e) {
       setTaskState(e.target.value);
     }
    

 
    return (
      <div className= "tasks">
        <Form className="col-one-content save-item" >
            <Form.Row className="row">
              <Col className = "col-1">
                <Form.Control placeholder={props.time} />
              </Col>
              <Col  className="col-8">
                <Form.Control placeholder="Enter Task Here" onChange = {handleTask} />
              </Col>
              <Col className="col-1">
                <button onClick = {handleSubmit} type="click" className="form-control save-btn"><i className="fas fa-save"></i></button>
              </Col>
            </Form.Row>
            <br></br>
            <div className="col-10 smll-row task-list">
            {taskState}
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