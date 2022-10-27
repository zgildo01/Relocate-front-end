const TodoItemCard = ({item, todolistId, user, handleDeleteItem, handleCompleteItem, handleRemoveItem }) => {
  return (
    <article> 
      <p>{item.name}</p>
			<button onClick={()=> handleDeleteItem(todolistId, item._id)} className="button-3">Delete</button>
      {handleCompleteItem ? 
      <button onClick={()=> handleCompleteItem(todolistId, item._id)} className="button-3">Add Item</button> 
      : 
      <button onClick={()=> handleRemoveItem(todolistId, item._id)} className="button-3">Remove Item</button>}
    </article>
  )
  }

export default TodoItemCard