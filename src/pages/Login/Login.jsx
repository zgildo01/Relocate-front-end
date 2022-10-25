import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className={styles.container}>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: "100%", m: "1rem"}}>
        <Paper elevation={3} sx={{ width: '70%'}}>
          <h1>Log In</h1>
          <p>{message}</p>
          <LoginForm
            handleSignupOrLogin={props.handleSignupOrLogin}
            updateMessage={updateMessage}
          />
        </Paper>
      </Box>
    </div>
  )
}

export default LoginPage
