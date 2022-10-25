import { Link } from "react-router-dom"
import styles from './TodoCard.module.css'

const TodoCard = ({ todolist }) => {
  return (
    <Link to={`/todolist/${todolist._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{todolist.name}</h1>
            <h3>{todolist.date}</h3>
            <h2>{todolist.details}</h2>
          </span>
        </header>
        <p>{todolist.details}</p>
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