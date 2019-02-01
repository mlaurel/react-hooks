import React, { useState } from 'react'
import ListUsers from './components/ListUsers'
import AddUsers from './components/AddUsers'
import EditUsers from './components/EditUsers'

const App = () => {
  const usersData = [
    { id: 1, name: 'Mike', username: 'mlaurel' },
    { id: 2, name: 'Stacy', username: 'stacyd' },
    { id: 3, name: 'Isla', username: 'islaboo' }
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
    // console.log(id)
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="grid-users">
        <div className="add-users">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUsers
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUsers addUser={addUser} />
            </div>
          )}
        </div>
        <div className="list-users">
          <h2>List Users</h2>
          <ListUsers users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
