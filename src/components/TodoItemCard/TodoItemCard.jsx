import styles from '../TodoItemCard/TodoItemCard.module.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const TodoItemCard = ({item, todolistId, user, handleDeleteItem, handleCompleteItem, handleRemoveItem }) => {
  return (
    <Box className= {styles.fullBox}> 
      <Paper>
        <Box className={styles.boxInfo}> 
          <p className={styles.todoInfo}>{item.name}</p>
          <div className={styles.buttonDiv}>
            <button onClick={()=> handleDeleteItem(todolistId, item._id)} className="button-3">Delete</button>
            {handleCompleteItem ?
            <button onClick={()=> handleCompleteItem(todolistId, item._id)} className="button-3">Done</button> 
            : 
            <button onClick={()=> handleRemoveItem(todolistId, item._id)} className="button-3">Not Done</button>}
          </div>
        </Box>
      </Paper>
    </Box> 
  )
  }

export default TodoItemCard