import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './EditWishlist.module.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

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
    <div className={styles.fullContainer}>
      <h2 className={styles.editWishHeader}>Edit Wishlist</h2>
      <Box className={styles.container}>
        <Paper>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Edit Name</label>
            <TextField
              required
              type="text"
              name="name"
              id="name-input"
              value={form.name}
              placeholder="Wishlist Name"
              onChange={handleChange}
              size="small"
            />
            <label htmlFor="details-input">Edit Details</label>
            <TextField
              required
              type="text"
              name="details"
              id="text-input"
              value={form.details}
              placeholder="Details"
              onChange={handleChange}
              multiline
              rows={8}
            />
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </Paper>
      </Box>
    </div>
  )
}

export default EditWishlist