import styles from './WishLists.module.css'
import WishlistCard from '../../components/WishlistCard/WishlistCard'
import WishlistBanner from '../../assets/Wishlist-banner.png'

const WishLists = (props) => {

  return (
    <>
      <div className={styles.wishlistBanner}> 
        <img src={WishlistBanner} alt="wishlist banner"/>
      </div>
      <main className={styles.container}>
        {props.wishlists?.map((wishlist) => (
          <WishlistCard key={wishlist._id} wishlist={wishlist}/>
        ))}
      </main>
    </>
  )
}

export default WishLists