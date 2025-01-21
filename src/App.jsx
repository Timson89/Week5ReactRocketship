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
import Title   from './components/Title.jsx';
import Todo    from './components/Todo.jsx';
import Modal   from './components/Modal.jsx';
// import Counter from './components/Counter.jsx';
import React, { useState } from 'react';


function App(){


  // return (
  
  //   <>
    
  //     <Counter 

  //     />
  //   </>
  // );

  const [showModal, setShowModal] = useState(false);

  function onTodoDelete(){

    setShowModal(true);
    console.log('onTodoDelete()');
  }
  function cancelModal(){
        
    setShowModal(false);
    console.log('cancelModal()');
  }
  function confirmModal(){

    setShowModal(false);
    console.log('confirmModal()');
  }

  return (

    <>

      <Title />

      <input id='text' type="text" onChange={(event) => {

        console.log(event.target.value);
      }} />

      <button onClick={() => setShowModal(true)}>Add Todo</button>

      <div className = 'todo__wrapper'>
        <Todo onTodoDelete={onTodoDelete} title = 'Finished Frontend Simplified'/>
        <Todo onTodoDelete={onTodoDelete} title = 'Finished Interview Section'/>
        <Todo onTodoDelete={onTodoDelete} title = 'Land A $100k Job'/>
      </div>

      { /* Modal Function Here */ }

      { showModal && <Modal title   = 'Confirm Delete?'
                            cancel  = 'Cancel'  cancelModal  = {cancelModal}
                            confirm = 'Confirm' confirmModal = {confirmModal}

      /> }
    </>
  );
}
export default App;
