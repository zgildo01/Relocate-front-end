import styles from './TodoItems.module.css'
import TodoItemCard from "../TodoItemCard/TodoItemCard";

const TodoItems = (props) => {
  const done = props.items.filter((i) => i.done === true)
  const notDone = props.items.filter((i) => i.done !== true)

  console.log(done)
  console.log(notDone)
  return (
    <>
    <section id={styles.columns}>
      <section id={styles.left}>
        <h1 className={styles.completeHeader}>Completed Tasks</h1>
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
      <section id={styles.right}>
        <h1 className={styles.pendingHeader}>Still Pending</h1>
        {notDone.map((item) =>
          <TodoItemCard
            key={item._id}
            item={item}
            user={props.user}
            todolistId={props.todolistId}
            handleCompleteItem={props.handleCompleteItem}
            handleDeleteItem={props.handleDeleteItem}
          />
        )}
      </section>
    </section>
    </>
  )
}

export default TodoItems