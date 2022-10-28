import { useState } from 'react'
import styles from './NewTodo.module.css'
import TextField from '@mui/material/TextField'

const NewTodo = (props) => {
  const [form, setForm] = useState({ name:'' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = ( evt ) => {
    evt.preventDefault()
    props.handleAddTodo(form)
    setForm({ name: ''})
  }

return (
  <form className={styles.container} onSubmit={handleSubmit}>
    <TextField
      required
      className={styles.inputNewTodo}
      type= "text"
      name="name"
      id="text-input"
      value={form.name}
      label="Add a To-do"
      onChange={handleChange} 
      variant="filled"
      multiline
      row={6}/>
      <button type="submit" className="button-3">Create New To-do</button>
  </form> 
  )
}

export default NewTodo