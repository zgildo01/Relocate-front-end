import { useState } from 'react'
import styles from './NewTodo.module.css'

const NewTodo = (props) => {
  const [form, setForm] = useState({ text:''})

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSumbit = ({ evt }) => {
    evt.preventDefault()
    setForm({ text: ''})
  }

return (
  <form className={styles.container} onSubmit={handleSumbit}>
    <textarea 
      required
      type= "text"
      name="text"
      id="text-input"
      value={form.text}
      placeholder="Add a To-do"
      onChange={handleChange} />
      <button type="submit">Create New To-do</button>
  </form> 
  )
}

export default NewTodo