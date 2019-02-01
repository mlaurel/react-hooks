import React, { useState } from 'react'

const AddUsers = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
    // console.log(name, value)
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <fieldset>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <button>Add User</button>
      </fieldset>
    </form>
  )
}

export default AddUsers
