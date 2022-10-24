import styles from './WishLists.module.css'

const WishLists = (props) => {
  return (
    <main className={styles.container}>
      {props.wishlists.map((wishlist) => (
        <p key={wishlist._id}>
          {wishlist.name}
        </p>
      ))}
    </main>
  )
}

export default WishLists