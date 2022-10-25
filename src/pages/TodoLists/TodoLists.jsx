import TodoCard from '../../components/TodoCard/TodoCard'
import styles from './TodoLists.module.css'

const TodoLists = (props) => {
  return (
    <main className={styles.container}>
        {props.todolists?.map((todolist) => (
          <TodoCard key={todolist._id} todolist={todolist} />
        ))}
    </main>
  )
}

export default TodoLists