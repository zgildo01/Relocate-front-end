import styles from './WishLists.module.css'

const WishLists = (props) => {

  console.log(props)
  console.log(props)

  return (
    <main className={styles.container}>
      {props.wishlist?.map((wishlist) => (
        <p key={wishlist._id}>
          {wishlist.name}
          Wishlists
        </p>
      ))}
      <h1>hlep</h1>
    </main>
  )
}

export default WishLists