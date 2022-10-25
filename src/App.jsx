// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import TodoLists from './pages/TodoLists/TodoLists'
import WishLists from './pages/WishLists/WishLists'
import TodoListForm from './pages/TodoListForm/TodoListForm'
import TodoDetails from './pages/TodoDetails/TodoDetails'
import EditTodoList from './pages/EditTodoList/EditTodoList'

// services
import * as authService from './services/authService'
import * as wishlistService from './services/wishlistService'
import * as todolistService from './services/todoListService'

// styles
import './App.css'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const [wishlists, setWishlists] = useState([])
  const [todolists, setTodoLists] = useState([])


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddTodoList = async (todoData) => {
    const newList = await todolistService.create(todoData)
    setTodoLists([newList, ...todolists])
    navigate('/todolists')
  }

  const handleUpdateTodoList = async (todoData) => {
    const updatedList = await todolistService.update(todoData)
    setTodoLists(todolists.map((l) => todoData._id === l._id ? updatedList : l))
    navigate('/todolists')
  }

  useEffect(() => {
    const fetchAllWishLists = async () => {
      const data = await wishlistService.index()
      setWishlists(data)
    }
    const fetchAllTodoLists = async () => {
      const data = await todolistService.index()
      setTodoLists(data)
    }
    if (user) {
      fetchAllWishLists()
      fetchAllTodoLists()
    }
  }, [user])
  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/changePassword"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/create-todolist'
          element={
            <ProtectedRoute user={user}>
              <TodoListForm handleAddTodoList={handleAddTodoList}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/todolists'
          element={
            <ProtectedRoute user={user}>
              <TodoLists todolists={todolists}/>
            </ProtectedRoute>
          }
        />
        <Route
          path='/wishlists'
          element={
            <ProtectedRoute user={user}>
              <WishLists wishlists={wishlists}/>
            </ProtectedRoute>
          }
        />
        <Route
          path='/create-wishlist'
          element={
            <ProtectedRoute user={user}>
              <WishLists />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/wishlists/:id'
          element={
            <ProtectedRoute user={user}>
              <WishLists />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/todolists/:id"
          element={
            <ProtectedRoute user={user}>
              <TodoDetails user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/todolists/:id/edit" element={
        <ProtectedRoute user={user}>
          <EditTodoList handleUpdateBlog={handleUpdateTodoList} />
        </ProtectedRoute>
} />
      </Routes>
    </>
  )
}







export default App
