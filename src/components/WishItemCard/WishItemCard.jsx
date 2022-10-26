
const CommentCard = ({ item, wishlistId, user, handleDeleteItem }) => {
  return (
    <article>
      <p>{item.purchased}</p>
      <p>{item.price}</p>
      <p>{item.name}</p>
      <p>{item.height}</p>
      <p>{item.width}</p>
      <p>{item.length}</p>
      <p>{item.linkToItem}</p>
      <p>{item.photo}</p>
			<button onClick={()=> handleDeleteItem(wishlistId, item._id)}>
        DELETE
      </button>
    </article>
  )
}

export default CommentCard