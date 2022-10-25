import styles from './WishLists.module.css'

const WishLists = (props) => {
  console.log('its a console log', props)
  return (
    <main className={styles.container}>
      {props.wishlist?.map((wishlist) => (
        <p key={wishlist._id}>
          {wishlist.name}
          Wishlists
        </p>
      ))}
    </main>
  )
}

export default WishLists