import styles from './WishItemCard.module.css'

const CommentCard = ({ item, wishlistId, user, handleDeleteItem }) => {
  return (
    <article className={styles.wishItems}>
      <p>{item.purchased}</p>
      <p>{item.price}$</p>
      <p>{item.name}</p>
      <p>{item.height} inches tall</p>
      <p>{item.width} inches wide</p>
      <p>{item.length} inches long</p>
      <a href={item.linkToItem}>Item</a>
      <img src={item.photo} alt={item.name} style={{ height: "50%", width: "50%" }}/>
			<button onClick={()=> handleDeleteItem(wishlistId, item._id)} className="button-3">
        DELETE
      </button>
    </article>
  )
}

export default CommentCard