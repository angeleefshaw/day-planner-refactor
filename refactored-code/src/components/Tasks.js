
import React, { useState, useRef } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import '../styles/Tasks.css';


 function Tasks(props) {
   const [taskState, setTaskState] = useState([])
   const [showtasks, setShowTasks] = useState(false)
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
            <div>
              <button className="show-btn" onClick={() =>{setShowTasks( !showtasks)}}>{showtasks? 'Hide' : 'Show'} Todo's </button>
              {showtasks?
                <div className="col-10 smll-row task-list-container">
                    <ul className="task-list">
                      {taskState.map((task, i) => (
                      <li className="new-task" key={'task_' + i}>{task}</li>
                      )) }
                    </ul>
                </div>
              : null}
            </div>
          </Form>
      </div>
    );
  }




export default Tasks;

