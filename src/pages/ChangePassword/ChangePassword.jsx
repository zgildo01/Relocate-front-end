import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import styles from './ChangePassword.module.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h1>Change Password</h1>
      <Box>
        <Paper>
          <p>{message}</p>
          <ChangePasswordForm {...props} updateMessage={updateMessage} />
        </Paper>
      </Box>
    </main>
  )
}

export default ChangePassword
