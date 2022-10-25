import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/changePassword">Change Password</Link></li>
        </ul>
      :
        <></>
      }
    </nav>
  )
}

export default NavBar
