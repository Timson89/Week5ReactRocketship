{ /*
Timothy Olofson
Week 5 React Rocketship(Vite)
Frontend Simplified
January 20th, 2025
*/ }


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
    
    
function Users(){

  const { id } = useParams();
  const [user, setUser] = useState({});

  async function axiosUserData() {

    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUser(data);
    // console.log(data);
  }

  useEffect(() => { 

    axiosUserData();

  }, []);

  return ( <>

      <Link to='/'>Go back</Link>
          
      <p>{ user.id       }</p>
      <p>{ user.name     }</p>
      <p>{ user.email    }</p>
      <p>{ user.username }</p>
    </>
  )
}
export default Users;