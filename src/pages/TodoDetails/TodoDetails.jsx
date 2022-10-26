import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './TodoDetails.module.css'

import * as todolistService from '../../services/todoListService'
import NewTodo from "../../components/NewTodo/NewTodo";
import TodoItems from "../../components/TodoItems/TodoItems"

const TodoDetails = (props) => {
  const {id} = useParams()
  const [todolist, setTodolist] = useState(null)

  useEffect(() => {
    const fetchTodoList = async () => {
      const data = await todolistService.show(id)
      setTodolist(data)
    }
    fetchTodoList()
  }, [id])

  const handleAddTodo = async (todoData) => {
    const newTodo = await todolistService.createTodo(id, todoData)
    setTodolist({...todolist, todo: [...todolist.todoListItems, newTodo]})
  }

  return (
    todolist ? 
      <main className={styles.container}>
      <article>
        <header>
          <h1>{todolist.name}</h1>
        </header>
        <p>{todolist.details}</p>
        <Link to={`/todolists/${id}/edit`} state={todolist}>Edit</Link>
        <button onClick={() => props.handleDeleteTodoList(id)}>Delete</button>
      </article>
      <section>
        <h1>Todolist Items</h1>
        <NewTodo 
        handleAddTodo={handleAddTodo}/>
        <TodoItems todoListItems={todolist.todoListItems}/>
      </section>
    </main>
    :
    <>
      <p>Loading...</p>
    </>
  );
}

export default TodoDetails