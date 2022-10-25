import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './TodoDetails.module.css'

import * as todolistService from '../../services/todoListService'

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

  console.log('Todolist State:', todolist)

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{props.todolist.name}</h1>
        </header>
        <p>{props.todolist.details}</p>
      </article>
      <section>
        <h1>Todolist Items</h1>
      </section>
    </main>
  );
}

export default TodoDetails