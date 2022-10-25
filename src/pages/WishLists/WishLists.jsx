import styles from './WishLists.module.css'

const WishLists = (props) => {
  console.log(props)
  return (
    <main className={styles.container}>
      {props.wishlists.map((wishlist) => (
        <p key={wishlist._id}>
          {wishlist.name}
        </p>
      ))}
      <h1>hlep</h1>
    </main>
  )
}

export default WishLists