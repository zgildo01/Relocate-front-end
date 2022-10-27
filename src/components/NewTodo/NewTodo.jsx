import { useState } from 'react'
import styles from './NewTodo.module.css'

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
    <textarea 
      required
      type= "text"
      name="name"
      id="text-input"
      value={form.name}
      placeholder="Add a To-do"
      onChange={handleChange} />
      <button type="submit" className="button-3">Create New To-do</button>
  </form> 
  )
}

export default NewTodo