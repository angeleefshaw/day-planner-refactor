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
    </div>
  )
}

export default App;
