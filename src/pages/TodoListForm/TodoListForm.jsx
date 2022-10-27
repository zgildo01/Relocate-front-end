import styles from './TodoListForm.module.css'
import { useState } from "react"

const TodoListForm = (props) => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    details: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		props.handleAddTodoList(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="To-do List Name"
          onChange={handleChange}
        />
        <label htmlFor="details-input">Details</label>
				<textarea
          required
          type="text"
          name="details"
          id="details-input"
          value={form.details}
          placeholder="To-do Details"
          onChange={handleChange}
        />
        <label htmlFor="date-input">Date</label>
        <input
          required
          type="date"
          name="date"
          id="date-input"
          value={form.date}
          placeholder="To-do List Name"
          onChange={handleChange}
        />
        <button type="submit" className="button-3">SUBMIT</button>
      </form>
    </main>
  )
}

export default TodoListForm