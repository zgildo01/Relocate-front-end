const CommentCard = ({ item }) => {
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
    </article>
  )
}

export default CommentCard