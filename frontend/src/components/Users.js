import React from 'react'
import { useEffect, useState } from 'react'

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/users')
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
          {users.map(user=>(
            <li key={user.user_id}>{user.username}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default Users