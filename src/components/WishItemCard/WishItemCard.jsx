import { Link } from "react-router-dom"

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
      <Link to={`/blogs/${wishlistId}/comments/${item._id}`} state={item}>
        EDIT
      </Link>
			<button onClick={()=> handleDeleteItem(wishlistId, item._id)}>
        DELETE
      </button>
    </article>
  )
}

export default CommentCard