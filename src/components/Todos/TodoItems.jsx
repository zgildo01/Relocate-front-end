import TodoItemCard from "../TodoItemCard/TodoItemCard";

const TodoItems = (props) => {
  const done = props.items.filter((i) => i.done === true)
  const notDone = props.items.filter((i) => i.done !== true)

  console.log(done)
  console.log(notDone)
  return (
    <>
    <section>
      {done.map((item) =>
        <TodoItemCard
          key={item._id}
          item={item}
          user={props.user}
          todolistId={props.todolistId}
          handleDeleteItem={props.handleDeleteItem}
          handleRemoveItem={props.handleRemoveItem}
        />
      )}
      </section>
      <section>
      {notDone.map((item) =>
        <TodoItemCard
          key={item._id}
          item={item}
          user={props.user}
          todolistId={props.todolistId}
          handleCompleteItem={props.handleCompleteItem}
        />
      )}
    </section>
    </>
  )
}

export default TodoItems