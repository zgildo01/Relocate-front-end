import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './WishlistDetails.module.css'

import * as wishlistService from '../../services/wishlistService'
import NewWish from "../../components/NewWish/NewWish"

const WishlistDetails = (props) => {
  const { id } = useParams()
  const [wishlist, setWishlist] = useState(null)

  useEffect(()=> {
    const fetchWishlist = async () => {
      const data = await wishlistService.show(id)
      setWishlist(data)
    }
    fetchWishlist()
  }, [id])
  console.log('wishlist state', wishlist)

  const handleAddItem = async (itemData) => {
    const newItem = await wishlistService.createItem(id, itemData)
    setWishlist({ ...wishlist, wishlistItems: [...wishlist.wishlistItems, newItem] })
  }
  
  return (
    wishlist ? 
      <main className={styles.container}>
      <article>
        <header>
          <h1>Wish Lists</h1>
          <h2>{wishlist.name}</h2>
        </header>
        <p>{wishlist.details}</p>
        <Link to={`/wishlists/${id}/edit`} state={wishlist}>Edit</Link>
        <button onClick={() => props.handleDeleteWishlist(id)}>Delete</button>
      </article>
      <section>
        <h1>Wishlist Items</h1>
        <NewWish handleAddItem={handleAddItem} />
      </section>
    </main>
    :
    <>
      <p>Loading...</p>
    </>
  );
}

export default WishlistDetails