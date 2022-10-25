import { Link } from 'react-router-dom'
import styles from './Wishlist.module.css'

const WishCard = ({ wishlist }) => {
  return (
    <Link to={`/wishlists/${wishlist._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{wishlist.name}'s Wishlist</h1>
            
          </span>
        </header>
        <p>{wishlist}</p>
      </article>
    </Link>
  )
}

export default WishCard