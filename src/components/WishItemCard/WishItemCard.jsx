import styles from './WishItemCard.module.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const CommentCard = ({ item, wishlistId, user, handleDeleteItem }) => {
  return (
    <Box className={styles.wishItems}>
      <Paper elevation={3}>
      <img className={styles.itemImage} src={item.photo} alt={item.name} style={{ height: "70%", width: "40%" }}/>
        <div className={styles.itemInfo}>
          <h5>{item.name}</h5>
          <p className={styles.price}><b>Price:</b> ${item.price}</p>
          <p className={styles.height}> <b>Height:</b> {item.height} inches</p>
          <p className={styles.width}><b>Width:</b> {item.width} inches </p>
          <p className={styles.length}><b>Depth:</b> {item.length} inches </p>
          <a href={item.linkToItem}><b>Link to Item</b></a>
        </div>
        <button onClick={()=> handleDeleteItem(wishlistId, item._id)} className={styles.deleteButton}>
            DELETE
          </button>
      </Paper>
    </Box>
  )
}

export default CommentCard