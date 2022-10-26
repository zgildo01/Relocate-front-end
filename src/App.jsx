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
import WishlistDetails from './pages/WishlistDetails/WishlistDetails'
import NewWishlist from './pages/NewWishlist/NewWishlist'
import EditWishlist from './pages/EditWishlist/EditWishlist'
import NewWish from './components/NewWish/NewWish'

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

  const handleDeleteTodoList = async (id) => {
    const deletedList = await todolistService.deleteList(id)
    setTodoLists(todolists.filter((l) => l._id !== deletedList._id))
    navigate('/todolists')
  }

  const handleAddWishlist = async (wishlistData) => {
    const newWishlist = await wishlistService.create(wishlistData)
    setWishlists([newWishlist, ...wishlists])
    navigate('/wishlists')
  }
  
  const handleUpdateWishlist = async (wishData) => {
    const updatedList = await wishlistService.update(wishData)
    setWishlists(wishlists.map((w) => wishData._id === w._id ? updatedList : w))
    navigate('/wishlists')
  }

  const handleDeleteWishlist = async (id) => {
    const deletedList = await wishlistService.deleteList(id)
    setWishlists(wishlists.filter((w) => w._id !== deletedList._id))
    navigate('/wishlists')
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
              <NewWishlist handleAddWishlist={handleAddWishlist}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/wishlists/:id'
          element={
            <ProtectedRoute user={user}>
              <WishlistDetails 
                user={user} 
                handleDeleteWishlist={handleDeleteWishlist}
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/todolists/:id"
          element={
            <ProtectedRoute user={user}>
              <TodoDetails user={user} handleDeleteTodoList={handleDeleteTodoList} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todolists/:id/edit" 
          element={
            <ProtectedRoute user={user}>
              <EditTodoList handleUpdateTodoList={handleUpdateTodoList} />
            </ProtectedRoute>
        } />
        <Route
          path="/wishlists/:id/edit" 
          element={
            <ProtectedRoute user={user}>
              <EditWishlist handleUpdateWishlist={handleUpdateWishlist} />
            </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}







export default App
