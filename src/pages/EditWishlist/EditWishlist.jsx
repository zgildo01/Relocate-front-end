import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './EditWishlist.module.css'

const EditWishlist = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateWishlist(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Edit Name</label>
        <input 
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Wishlist Name"
          onChange={handleChange}
        />
        <label htmlFor="details-input">Edit Details</label>
        <textarea
          required
          type="text"
          name="details"
          id="text-input"
          value={form.details}
          placeholder="Details"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default EditWishlist