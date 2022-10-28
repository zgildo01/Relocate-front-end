import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './ChangePasswordForm.module.css'
import * as authService from '../../services/authService'
import TextField from '@mui/material/TextField'

const ChangePasswordForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.changePassword(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>
          Current Password
        </label>
        <TextField
          type="password"
          autoComplete="off"
          id="password"
          value={pw}
          name="pw"
          onChange={handleChange}
          size="small"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="newPassword" className={styles.label}>
          New Password
        </label>
        <TextField
          type="password"
          autoComplete="off"
          id="newPassword"
          value={newPw}
          name="newPw"
          onChange={handleChange}
          size="small"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="newPasswordConf" className={styles.label}>
          Confirm New Password
        </label>
        <TextField
          type="password"
          autoComplete="off"
          id="newPasswordConf"
          value={newPwConf}
          name="newPwConf"
          onChange={handleChange}
          size="small"
        />
      </div>
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
          Change Password
        </button>
        <Link to="/">
          <button className={styles.button} variant="contained">Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default ChangePasswordForm
