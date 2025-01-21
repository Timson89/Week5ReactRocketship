{ /*
Timothy Olofson
Week 5 React Rocketship(Vite)
Frontend Simplified
January 20th, 2025
*/ }


import React, { useEffect, useState } from "react";
import axios from "axios";
import User  from "../components/User";
import { Link } from "react-router-dom";
  
  
function Home(){

  // How to push the data to the localhost //

  const [users, setUsers] = useState([]);

  async function fetchUsers(){

    // How to fetch An API using 'axios' inside async fucntion //

    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setUsers(data);
    // console.log(data);
  }
  
  useEffect(() => { 
    setTimeout(() => { 
      fetchUsers(); 
    }, 500); 
  }, []);

   // Pulling An API dynamically //

  function renderUsers(){

    return users.map((user) =>  (

      // {/* Child element in A list should have An unique 'key' prop. */}

      <Link key={user.id}  to={`/Users/${user.id}`}>

        <User
        
          id       = {user.id}
          name     = {user.name}
          email    = {user.email}
          username = {user.username}

        />
      </Link>
      )
    )
  }

  function renderSkeletonloading(){

    return <h1>Loading... </h1>
    
  } return (

    <> { users.length ? renderUsers() : renderSkeletonloading() } </>

  )
}
export default Home;