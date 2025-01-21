// Timothy Olofson
// Week 5 React Rocketship(Vite)
// Frontend Simplified
// January 20th, 2025


import './Todo.css';


function Todo({title, paragraph}){

  return (

    <>
    
      <div className='todo'>

        <h2>{(title)}</h2>
        <p>{(paragraph)}</p>
        <button>Delete</button>
        
      </div>
    </>
  );
}
export default Todo;