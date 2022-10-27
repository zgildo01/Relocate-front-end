import { Link } from "react-router-dom"
import styles from './TodoCard.module.css'

const TodoCard = ({ todolist }) => {
  return (
    <Link to={`/todolists/${todolist._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{todolist.name}</h1>
            <h3>{new Date(todolist.date).toLocaleDateString()}</h3>
          </span>
        </header>
        <h4>{todolist.details}</h4>
        {todolist.todoListItems.map(item => (
          <p key={item._id}>
            {item.name}
            {item.done}
          </p>
        ))}
      </article>
    </Link>
  )
}

export default TodoCard