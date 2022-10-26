import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/wishlists`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

const create = async (wishlistData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wishlistData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  index,
  show,
  create,
}