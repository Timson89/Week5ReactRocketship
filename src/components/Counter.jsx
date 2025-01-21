{ /*
  Timothy Olofson
  Week 5 React Rocketship(Vite)
  Frontend Simplified
  January 20th, 2025
  */ }


  // HOW TO USE HOOK USESTATE //


  import './Counter.css';
  import React, {useState} from 'react';


  function Counter(){


    // HOW TO CHANGE ARRAYS //

    const [arr, setArr] = useState([]);

    function addPlus(){

      setArr((prevArr) => [ ...prevArr, '+' ]);
    }
    function addMinus(){

      setArr((prevArr) => [ ...prevArr, '-' ]);
    }

    return (

      <>

        <div>
          <button onClick={addMinus} className="decrement">-</button>
          <button onClick={addPlus}  className="increment">+</button>
          {arr.toString()}
        </div>
      </>
    );


    // HOW TO CHANGE OBJECTS // 

    // const [counter, setCounter] = useState(0);

    // function incrementCounter(){

    //   setCounter((prevCounter) => prevCounter + (1) )
    // }
    // function decrementCounter(){

    //   setCounter((prevCounter) => prevCounter - (1) )
    // }

    // const [cart, setCart] = useState({ item: 'apple', quatity: 0 });

    // 1. Use callback( () => {} ) to get previous value.
    // 2. Spread out all properties of previous state.
    // 3. Only change the property that you need to change.

    // function removeApple(){

    //   setCart((prevCart) => ({ ...prevCart, quatity: prevCart.quatity - 1 }));
    // }

    // function addApple(){

    //   setCart((prevCart) => ({ ...prevCart, quatity: prevCart.quatity + 1 }));
    // }

    // return (

    //   <>

    //     <div>
    //       <button onClick={removeApple} className="decrement">-</button>

    //                                 <span className='counter'>{(counter)}</span> 
                                    
    //                                 {cart.quatity}
    //                                 {cart.item}

    //       <button onClick={addApple} className="increment">+</button>
    //     </div>
    //   </>
    // );
  }
  export default Counter;