import { useState } from "react"
import styles from './NewWish.module.css'


const NewWish = (props) => {
  const [form, setForm] = useState({
    price: '',
    name: '',
    height: '',
    width: '',
    length: '',
    linkToItem: '',
    photo: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddItem(form)
    setForm({ 
      price: '',
      name: '',
      height: '',
      width: '',
      length: '',
      linkToItem: '',
      photo: '', 
    })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="price-input">Item Price</label>
        <input
          required
          type="number"
          min={0}
          name="price"
          id="price-input"
          value={form.price}
          placeholder={0}
          onChange={handleChange}
        />
        <label htmlFor="name-input">Item Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Item Name"
          onChange={handleChange}
        />
        <label htmlFor="height-input">Item Height (inches)</label>
        <input
          required
          type="number"
          min={0}
          name="height"
          id="height-input"
          value={form.height}
          placeholder={0}
          onChange={handleChange}
        />
        <label htmlFor="width-input">Item Width (inches)</label>
        <input
          required
          type="number"
          min={0}
          name="width"
          id="width-input"
          value={form.width}
          placeholder={0}
          onChange={handleChange}
        />
        <label htmlFor="length-input">Item Depth (inches)</label>
        <input
          required
          type="number"
          min={0}
          name="length"
          id="length-input"
          value={form.length}
          placeholder={0}
          onChange={handleChange}
        />
        <label htmlFor="link-input">Item Link</label>
        <input
          required
          type="string"
          name="linkToItem"
          id="link-input"
          value={form.linkToItem}
          placeholder="Item Link"
          onChange={handleChange}
        />
        <label htmlFor="photo-input">Item Photo</label>
        <input
          required
          type="url"
          name="photo"
          id="photo-input"
          value={form.photo}
          placeholder="Item Image Link"
          onChange={handleChange}
        />
      <button type="submit" className="button-3">Submit</button>
    </form>
  )
}

export default NewWish