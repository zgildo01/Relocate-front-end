import styles from './WishLists.module.css'
import WishlistCard from '../../components/WishlistCard/WishlistCard'

const WishLists = (props) => {

  return (
    <main className={styles.container}>
      {props.wishlists?.map((wishlist) => (
        <WishlistCard key={wishlist._id} wishlist={wishlist}/>
      ))}
    </main>
  )
}

export default WishLists