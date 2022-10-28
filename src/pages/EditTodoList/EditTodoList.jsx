import styles from './EditTodoList.module.css'
import { useLocation } from 'react-router-dom'
import { useState } from "react"
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

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
    <div className={styles.fullContainer}>
      <Box className={styles.container}>
        <Paper>
          <form onSubmit={handleSubmit}>
            <h1>Edit To-Do List</h1>
            <label htmlFor="name-input">Edit Name</label>
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
            <label htmlFor="details-input">Edit Details</label>
            <TextField
              required
              type="text"
              name="details"
              id="details-input"
              value={form.details}
              placeholder="To-do Details"
              onChange={handleChange}
              multiline
              rows={5}
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
            <button type="submit" className={styles.submitbutton}>SUBMIT</button>
          </form>
        </Paper>
      </Box>
    </div>
  )
}

export default EditTodoList