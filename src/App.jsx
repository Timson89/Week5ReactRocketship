{ /*
Timothy Olofson
Week 5 React Rocketship(Vite)
Frontend Simplified
January 20th, 2025
*/ }


// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import './App.css';

import Title from './components/Title.jsx';
import Todo  from './components/Todo.jsx';
import Modal from './components/Modal.jsx';


function App(){

  return (

    <>

      <Title />

      <input type="text" onChange={(event) => {

        console.log(event.target.value);
      }} />

      <button>Add Todo</button>

      <div className = 'todo__wrapper'>
        <Todo title = 'Finished Frontend Simplified'/>
        <Todo title = 'Finished Interview Section'/>
        <Todo title = 'Land A $100k Job'/>
      </div>

      { /* Modal Function Here */ }

      <Modal title   = 'Are you sure?'
             cancel  = 'Cancel'
             confirm = 'Confirm'
      />
    </>
  );
}
export default App;
