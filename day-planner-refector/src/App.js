import React from 'react';
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <Tasks time="9am"/>
      <Tasks time="10am"/>
      <Tasks time="11am"/>
      <Tasks time="12am"/>
      <Tasks time="1pm"/>
      <Tasks time="2pm"/>
      <Tasks time="3pm"/>
      <Tasks time="4pm"/>
    </div>
  )
}

export default App;
