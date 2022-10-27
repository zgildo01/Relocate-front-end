const TodoItemCard = ({item, todolistId, user, handleDeleteItem, handleCompleteItem, handleRemoveItem }) => {
  return (
    <article> 
      <p>{item.name}</p>
			<button onClick={()=> handleDeleteItem(todolistId, item._id)} className="button-3">Delete</button>
      {handleCompleteItem ?
      <button onClick={()=> handleCompleteItem(todolistId, item._id)} className="button-3"> Not Done</button> 
      : 
      <button onClick={()=> handleRemoveItem(todolistId, item._id)} className="button-3">Done</button>}
    </article>
  )
  }

export default TodoItemCard