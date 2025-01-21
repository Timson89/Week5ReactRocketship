// Timothy Olofson
// Week 5 React Rocketship(Vite)
// Frontend Simplified
// January 20th, 2025


import './Todo.css';


function Todo({ title, onTodoDelete }){


  return (

    <>
    
      <div className='todo'>
        <p>{(title)}</p>
        <button onClick={onTodoDelete}>Delete</button>
      </div>
    </>
  );
}
export default Todo;