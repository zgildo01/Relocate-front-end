import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './TodoDetails.module.css'

import * as todolistService from '../../services/todoListService'
import NewTodo from "../../components/NewTodo/NewTodo";
import TodoItems from "../../components/Todos/TodoItems"

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
    setTodolist({...todolist, todoListItems: [...todolist.todoListItems, newTodo]})
  }

  const handleDeleteItem = async (todolistId, itemId) => {
    await todolistService.deleteItem(todolistId, itemId)
    setTodolist({ ...todolist, todoListItems: todolist.todoListItems.filter((i) => i._id !== itemId) })
  }

  const handleCompleteItem = async (todolistId, itemId) => {
    const updatedList = await todolistService.updateItem(todolistId, itemId)
    setTodolist(updatedList)
  }

  const handleRemoveItem = async (todolistId, itemId) => {
    const updatedList = await todolistService.updateItem(todolistId, itemId)
    setTodolist(updatedList)
  }

  return (
    todolist ? 
      <main className={styles.container}>
      <article>
        <header>
          <h1>{todolist.name}</h1>
        </header>
        <p>{todolist.details}</p>
        <div className={styles.buttonDiv}>
          <Link to={`/todolists/${id}/edit`} state={todolist}><button className={styles.edit}>Edit</button></Link>
          <button onClick={() => props.handleDeleteTodoList(id)} className={styles.delete}>Delete</button>
        </div>
      </article>
      <section>
        <h1>Todolist Items</h1>
        <NewTodo handleAddTodo={handleAddTodo} />
        <div className={styles.taskListHeaders}>
          <p>Finished Tasks</p>
          <p>Still Pending</p>
        </div>
        <TodoItems 
          todolistId={id}
          user={props.user}
          items={todolist.todoListItems}
          handleDeleteItem={handleDeleteItem}
          handleCompleteItem={handleCompleteItem}
          handleRemoveItem={handleRemoveItem}
        />
      </section>
    </main>
    :
    <>
      <p>Loading...</p>
    </>
  );
}

export default TodoDetails