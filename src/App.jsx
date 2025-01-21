// Timothy Olofson
// Week 5 React Rocketship(Vite)
// Frontend Simplified
// January 20th, 2025

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

      <div className="todo__wrapper">
        <Todo />
        <Todo />
        <Todo />
      </div>
      <Modal />
    </>
  );
}
export default App;
