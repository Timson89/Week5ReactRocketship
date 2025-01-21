{/*
Timothy Olofson
Week 5 React Rocketship(Vite)
Frontend Simplified
January 20th, 2025
*/}

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

      <div className='todo__wrapper'>

        <Todo title='Finished Frontend Simplified'
              paragraph='Code along with Frontend Simplified, step by step.'/>

        <Todo title='Finished Interview Section'
              paragraph='Finish every interview question in the next six weeks.'/>

        <Todo title='Land A $100k Job'
              paragraph='Apply to 100 jobs.'/>
      </div>

      {/* Modal Function Here */}

      <Modal title='Are you sure?'
             cancel='Cancel'
             confirm='Confirm'/>
    </>
  );
}
export default App;
