{ /*
Timothy Olofson
Week 5 React Rocketship(Vite)
Frontend Simplified
January 20th, 2025
*/ }


import { useEffect } from "react";
import { useParams } from "react-router-dom";
    
    
    function Users(){

      const { userID } = useParams();

      useEffect(()=> { fetch(`http://localhost:5173/Users/${userID}`) }, []);
      
      console.log(userID);
    
      return <h1>{userID}</h1>
    }
    export default Users;