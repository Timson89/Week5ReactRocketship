{ /*
Timothy Olofson
Week 5 React Rocketship(Vite)
Frontend Simplified
January 20th, 2025
*/ }


import { Link } from 'react-router-dom';
    
    
    function Nav(){
      
    
      return (

        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/About">About</Link> */}
          {/* <Link to="/Contact">Contact</Link> */}

          <Link to="/Users/ronaldo">Ronaldo</Link>
          <Link to="/Users/messi">Messi</Link>
          <Link to="/Users/timson">Timson</Link>
        </nav>
      );
    }
    export default Nav;