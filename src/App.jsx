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
// import Title   from './components/Title.jsx';
// import Todo    from './components/Todo.jsx';
// import Modal   from './components/Modal.jsx';
// import Counter from './components/Counter.jsx';
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';
import Users from './pages/Users.jsx';
import Nav from './components/Nav.jsx';


function App(){


  return (

    <>

      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path='/'           element={ <Home /> } />
          {/* <Route path='/About'   element={ <About /> } /> */}
          {/* <Route path='/Contact' element={ <Contact /> } /> */}
          <Route path='/Users/:id' element={ <Users /> } />
        </Routes>
      </Router>
    </>
  );


  // const [showModal, setShowModal] = useState(false);

  // function onTodoDelete(){

  //   setShowModal(true);
  //   console.log('onTodoDelete()');
  // }
  // function cancelModal(){
        
  //   setShowModal(false);
  //   console.log('cancelModal()');
  // }
  // function confirmModal(){

  //   setShowModal(false);
  //   console.log('confirmModal()');
  // }

//-----------------------------------------------------------------------------------------

  // Proper placement of useEffect is after functions //

  // useEffect(() => {console.log('Only on mount')}, []); // <--ONLY-ON-MOUNT--< //

  // useEffect(() => {

  //   console.log(`On mount AND on ${showModal} change`);

  //   // setShowModal(!showModal); // <--INFINITE-LOOP--< //

  // }, [showModal]);

  // useEffect(() => {console.log('EVERY Render')});

//-----------------------------------------------------------------------------------------

  // return (

  //   <>

  //     <Title />

  //     <input id='text' type="text" onChange={(event) => {

  //       console.log(event.target.value);
  //     }} />

  //     <button onClick={() => setShowModal(true)}>Add Todo</button>

  //     <div className = 'todo__wrapper'>
  //       <Todo onTodoDelete={onTodoDelete} title = 'Finished Frontend Simplified'/>
  //       <Todo onTodoDelete={onTodoDelete} title = 'Finished Interview Section'/>
  //       <Todo onTodoDelete={onTodoDelete} title = 'Land A $100k Job'/>
  //     </div>

  //     { /* Modal Function Here */ }

  //     { showModal && <Modal title   = 'Confirm Delete?'
  //                           cancel  = 'Cancel'  cancelModal  = {cancelModal}
  //                           confirm = 'Confirm' confirmModal = {confirmModal}

  //     /> }
  //   </>
  // );
}
export default App;
