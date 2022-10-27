import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className={styles.container}>
      <Box>
        <Paper elevation={3}>
          <h1>Sign Up</h1>
          <p>{message}</p>
          <SignupForm {...props} updateMessage={updateMessage} />
        </Paper>
      </Box>
    </div>
  )
}

export default Signup
