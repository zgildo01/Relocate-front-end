import { Link } from 'react-router-dom'
import styles from './WishlistCard.module.css'

const WishCard = (props) => {
  return (
    <Link to={`/wishlists/${props.wishlist._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{props.wishlist.name}</h1>
            <h2>{props.wishlist.details}</h2>
            <h3>{props.wishlist.wishlistItems}</h3>

          </span>
        </header>
        <p>{props.wishlist.details}</p>
        {props.wishlist.wishlistItems.map(item => (
          <p>
            {item.name}
            {item.purchased}
          </p>
        ))}
      </article>
    </Link>
  )
}

export default WishCard