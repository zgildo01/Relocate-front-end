import styles from './EditTodoList.module.css'
import { useLocation } from 'react-router-dom'
import { useState } from "react"

const EditTodoList = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		props.handleUpdateTodoList(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit To-Do List</h1>
        <label htmlFor="name-input">Edit Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="To-do List Name"
          onChange={handleChange}
        />
        <label htmlFor="details-input">Edit Details</label>
				<textarea
          required
          type="text"
          name="details"
          id="details-input"
          value={form.details}
          placeholder="To-do Details"
          onChange={handleChange}
        />
        <label htmlFor="date-input">Edit Date</label>
        <input
          required
          type="date"
          name="date"
          id="date-input"
          value={form.date}
          placeholder="To-do List Name"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditTodoList