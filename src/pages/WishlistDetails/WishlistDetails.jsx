import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './WishlistDetails.module.css'

import * as wishlistService from '../../services/wishlistService'

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
  
  return (
    wishlist ? 
      <main className={styles.container}>
      <article>
        <header>
          <h1>Wish Lists</h1>
          <h2>{wishlist.name}</h2>
        </header>
        <p>{wishlist.details}</p>
        {/* <button>View Full List</button>
        <button onClick={() => props.handleDeleteWishlist(id)}>Delete</button> */}
      </article>
      <section>
        <h1>Wishlist Items</h1>
      </section>
    </main>
    :
    <>
      <p>Loading...</p>
    </>
  );
}

export default WishlistDetails