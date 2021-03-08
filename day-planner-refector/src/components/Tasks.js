
import React, { useState, useRef } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import '../styles/Tasks.css';


 function Tasks(props) {
   const [taskState, setTaskState] = useState([])
   const input = useRef();

     function handleSubmit(e) {
       e.preventDefault();
       setTaskState([...taskState, input.current.value]);
       e.target.reset();

     };

    return (
      <div className= "tasks">
        <Form className="col-one-content save-item" onSubmit = {handleSubmit}  >
            <Form.Row className="row">
              <Col className = "col-1">
                <Form.Control placeholder={props.time} />
              </Col>
              <Col  className="col-8">
                <Form.Control placeholder="Enter Task Here" ref={input}/>
              </Col>
              <Col className="col-1">
                <Button  type="submit" className="form-control save-btn"><i className="fas fa-save"></i></Button>
              </Col>
            </Form.Row>
            <br></br>
            <div className="col-10 smll-row task-list">
              <ul className="task-list">
                {taskState.map((task, b) => (
                <li className="new-task" li key={b}>{task}</li>
                ))}
              </ul>
            </div>
          </Form>
      </div>
    );
  }


export default Tasks;

