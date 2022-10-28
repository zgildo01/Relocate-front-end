import TodoCard from '../../components/TodoCard/TodoCard'
import styles from './TodoLists.module.css'
import todoListBanner from '../../assets/todo-list-banner.png'


const TodoLists = (props) => {
  return (
    <>
    <div className={styles.todoBanner}>
      <img src={todoListBanner} alt=""/>
    </div>
    {props.todolists ?
      <main className={styles.container}>
        {props.todolists?.map((todolist) => (
          <TodoCard 
            key={todolist._id} 
            todolist={todolist} 
          />
        ))}
      </main>
    :
      <>
        <h1>Loading...</h1>
      </>
    }
    </>
  )
}

export default TodoLists