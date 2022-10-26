import { useState } from "react";
import styles from './NewWishlist.module.css'

const NewWishlist = (props) => {
  const [form, setForm] = useState({
    name: '',
    details: ''
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddWishlist(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Wishlist Name</label>
        <input 
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Wishlist Name"
          onChange={handleChange}
        />
        <label htmlFor="details-input">Details</label>
        <textarea
          required
          type="text"
          name="details"
          id="text-input"
          value={form.details}
          placeholder="Details"
          onChange={handleChange}
        />
        <button type="submit">Create Wishlist</button>
      </form>
    </main>
  )
}

export default NewWishlist