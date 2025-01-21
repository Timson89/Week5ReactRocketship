{ /*
Timothy Olofson
Week 5 React Rocketship(Vite)
Frontend Simplified
January 20th, 2025
*/ }





const pixal = '0.1rem';

function User({id, name, email, username}){

  return (

      <div style={{ border: `solid ${pixal} black` }}>

      <div>{ id                 }</div>
      <div>{ name.toUpperCase() }</div>
      <div>{ email              }</div>
      <div>{ username           }</div>
      
    </div>
  )
}
export default User;