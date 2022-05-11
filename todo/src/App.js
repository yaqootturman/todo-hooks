// import './Components/style.css'
import React from 'react'

import FormTask from './Components/FormTask'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h2 className='heading'>
        Hello from ToDo, You can list your tasks, edit and delete them!
      </h2>
      <FormTask/>
    </div>
  );
}

export default App;
