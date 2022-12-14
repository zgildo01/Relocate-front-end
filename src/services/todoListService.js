import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/todolists`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (todoData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (todoData) => {
  try {
    const res = await fetch(`${BASE_URL}/${todoData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteList = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createTodo = async (id, todoData) => {
  try {
    const res = await fetch (`${BASE_URL}/${id}/items`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateItem = async (todolistId, itemId) => {
  try {
    const res = await fetch(`${BASE_URL}/${todolistId}/items/${itemId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteItem = async(todolistId, itemId) => {
  try {
    const res = await fetch(`${BASE_URL}/${todolistId}/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  index,
  show,
  create,
  update,
  deleteList,
  createTodo,
  deleteItem,
  updateItem
}