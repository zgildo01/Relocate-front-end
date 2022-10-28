import { Link } from "react-router-dom"
import styles from './TodoCard.module.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const TodoCard = ({ todolist }) => {
  return (
    <Box className={styles.fullContainer}> 
      <Paper>
        <Link to={`/todolists/${todolist._id}`}>
          <div className={styles.container}>
            <header>
              <span className={styles.header}>
                <h1>{todolist.name}</h1>
                <h3>{new Date(todolist.date).toLocaleDateString()}</h3>
              </span>
            </header>
            <h4>{todolist.details}</h4>
          </div>
        </Link>
      </Paper>
    </Box>
  )
}

export default TodoCard