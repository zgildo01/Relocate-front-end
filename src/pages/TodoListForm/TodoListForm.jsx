import styles from './TodoListForm.module.css'
import { useState } from "react"
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import { style } from '@mui/system'

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
    <>
      <h1>Create a new To-do List</h1>
      <div className={styles.container}>
        <Box className={styles.formContainer}>
          <Paper elevation={3}> 
            <form onSubmit={handleSubmit} className={styles.formfull}>
              <label htmlFor="name-input" className={styles.nameTag}>Name</label>
              <TextField
                required
                type="text"
                name="name"
                id="name-input"
                value={form.name}
                placeholder="To-do List Name"
                onChange={handleChange}
                size="small"
              />
              <label htmlFor="details-input">Details</label>
              <TextField
                required
                type="text"
                name="details"
                id="details-input"
                value={form.details}
                placeholder="To-do Details"
                onChange={handleChange}
                multiline
                rows={6}
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
          </Paper>
        </Box>
      </div>
    </>
  )
}

export default TodoListForm