const TodoItemCard = ({item, todolistId, user, handleDeleteItem }) => {
  return (
    <article> 
      <p>{item.name}</p>
			<button onClick={()=> handleDeleteItem(todolistId, item._id)}>Delete</button>
    </article>
  )
  }

export default TodoItemCard