import { useState } from "react";
import styles from './NewWishlist.module.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

import NewWishlistBanner from '../../assets/new-wishlist-banner.png'

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
    <>
      <div className={styles.todoBanner}>
        <img src={NewWishlistBanner} alt=""/>
      </div>
      <div className={styles.container}>
        <Box className={styles.formContainer}>
          <Paper> 
            <form onSubmit={handleSubmit}>
              <label htmlFor="name-input">Wishlist Name</label>
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
              <label htmlFor="details-input">Details</label>
              <TextField
                required
                type="text"
                name="details"
                id="text-input"
                value={form.details}
                placeholder="Details"
                onChange={handleChange}
                multiline
                rows={9}
              />
              <button type="submit" className="button-3">Create Wishlist</button>
            </form>
          </Paper>
        </Box>
      </div>
    </>
  )
}

export default NewWishlist