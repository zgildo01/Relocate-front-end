import TodoItemCard from "../TodoItemCard/TodoItemCard";

const TodoItems = (props) => {
  console.log(props)

  return (
    <>
      {props.items.map((item) =>
        <TodoItemCard
          key={item._id}
          item={item}
          user={props.user}
          todolistId={props.todolistId}
          handleDeleteItem={props.handleDeleteItem}
        />
      )}
    </>
  )
}

export default TodoItems