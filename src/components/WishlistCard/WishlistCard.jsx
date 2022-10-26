import { Link } from 'react-router-dom'
import styles from './WishlistCard.module.css'

const WishlistCard = ({wishlist}) => {

  return (
    <Link to={`/wishlists/${wishlist._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{wishlist.name}</h1>
          </span>
        </header>
        <p>{wishlist.details}</p>
      </article>
    </Link>
  )
}

export default WishlistCard