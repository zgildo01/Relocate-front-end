import WishItemCard from '../WishItemCard/WishItemCard'

const WishItems = (props) => {
  if (!props.items) return <h4>No Wishlist Items</h4>

  return (
    <>
      {props.items.map((item) => (
        <WishItemCard 
          key={item._id} 
          item={item} 
          user={props.user} 
        />
      ))}
    </>
  );
}
export default WishItems
