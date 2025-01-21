// Timothy Olofson
// Week 5 React Rocketship(Vite)
// Frontend Simplified
// January 20th, 2025


import './Todo.css';


function Todo({title, paragraph}){

  function deleteTodo(id){

    console.log('deleteTodo()', id);
  }

  return (

    <>
    
      <div className='todo'>
        <p>{(title)}</p>
        <button onClick={() => deleteTodo(1)}>Delete</button>
      </div>
    </>
  );
}
export default Todo;