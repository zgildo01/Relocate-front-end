import { Link } from 'react-router-dom'
import styles from './WishlistCard.module.css'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const WishlistCard = ({wishlist}) => {

  return (
    <Box className={styles.fullContainer}>
      <Paper> 
        <Link to={`/wishlists/${wishlist._id}`} >
          <article className={styles.container}>
            <header>
              <span>
                <h1>{wishlist.name}</h1>
              </span>
            </header>
            <p>{wishlist.details}</p>
          </article>
        </Link>
      </Paper>
    </Box>
  )
}

export default WishlistCard