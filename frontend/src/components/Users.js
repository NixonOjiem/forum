import React from 'react'
import { useEffect, useState } from 'react'

function Users() {
  const [users, setUsers] = useState([]);
  const userID = localStorage.getItem('userId');
  console.log("user Id is ", userID)

  useEffect(()=>{
    fetch(`http://localhost:3001/users/${userID}`)
    .then(response => response.json())
    .then(data=>{
      console.log('Fetched data ', data);
      setUsers(data)
    })
    .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {
        <ul>
          <li>First Name: {users.first_name}</li>
          <li>Last Name: {users.last_name}</li>
          <li>Email Name: {users.email}</li>
          <li>User Name: {users.username}</li>
         
        </ul>
      }
    </div>
  )
}

export default Users