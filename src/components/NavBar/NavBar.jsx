import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/changePassword">Change Password</Link></li>
          <li><Link to="/todolists">Your To-do Lists</Link></li>
          <li><Link to="/wishlists">Your Wish Lists</Link></li>
          <li><Link to="/create-todolist">Create New To-do List</Link></li>
          <li><Link to="/create-wishlist">Create New Wish List</Link></li>
        </ul>
      :
        <></>
      }
    </nav>
  )
}

export default NavBar
