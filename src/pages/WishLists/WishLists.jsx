import styles from './WishLists.module.css'
import WishCard from '../../components/WishlistCard/WishlistCard'

const WishLists = (props) => {

  return (
    <main className={styles.container}>
      {props.wishlists?.map((wishlist) => (
        <WishCard key={wishlist._id} wishlist={wishlist}/>
        ))}
    </main>
  )
}

export default WishLists