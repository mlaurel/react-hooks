import React, { useState } from 'react'

const EditUsers = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
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
        <button>Update User</button>
        <button
          className="button muted-button"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </button>
      </fieldset>
    </form>
  )
}

export default EditUsers
