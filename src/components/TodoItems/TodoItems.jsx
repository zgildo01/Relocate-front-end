import TodoItemCard from "../TodoItemCard/TodoItemCard";

const TodoItems = (props) => {
  if(!props.todoListItems) return <h4>No to-dos yet</h4> 

  return (
    <>
      {props.todoListItems.map((todoItem) => 
        <TodoItemCard
          key={todoItem._id}
          todoItem={todoItem} />
      )}
    </>
  )
}

export default TodoItems