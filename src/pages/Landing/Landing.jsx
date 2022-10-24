import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
    {user ?
      <>
        <p>Welcome, {user.name}</p>
        <p>Countdown placeholder</p>

        <div>
          <p>to-do List</p>
          <p>to-do list view placeholder</p>
          <Link
            to="/create-todolist"
          >
            <button>create new to-do list</button>
          </Link>
          <Link
            to="/todolists"
          >
            <button>view all to-do list</button>
          </Link>
        </div>

        <div>
          <p>Wishlist List</p>
          <p>wishlistlist view placeholder</p>
          <button><Link to='/create-wishlist'>create a new wishlist</Link></button>
          <button><Link to='/wishlist'>view all wishlists</Link></button>
        </div>
      </>
    :
      <>
        <div className='welcome-statement'> 
            
          <h2> Giving you peace of mind every step of the way. Worry Less. Enjoy More.</h2>
          <h2>We make moving easier.</h2>
        </div>

        <div className='login-div'>
          <p>Already have an account?</p>
          <button><Link to="/login">Log In</Link></button>
        </div>

        <div className='sign-up-div'>
          <p>New to Relocate?</p>
          <button><Link to="/signup">Sign Up</Link></button>
        </div>

        <div className='about-relocate'>
          <h3>About Relocate.</h3>
          <p>Relocate. is a hub for all things you need when you're moving. This app makes an overwhelming experience more seamle ss and less stressful.</p>
          <p>Instead of using multiple documents and spreadsheets, Relocate. gives you the power to have everything in one place - all you have to do is sign-up. We wanted to create an app to help ease the stress of moving which is a notoriously bad time.</p>
        </div>

        <div className='meet-the-team'>
          <h3>Meet the Team</h3>
          <p>Chaotic Good Co. is made up of a group of software developers including Steph Michael, Zeus Zaragoza-Gildo and Ryan Combest. We strive to make clean, functional products. </p>
        </div>

        <div className='features-div'> 
          <h3>Features</h3>
          <p>Relocate. allows you to:</p>
          <div className='features-list'>
            <ul>
              <li>Track to-do lists for your apartment</li>
              <li>Create a wish list</li>
              <li>Upload a floor plan and add dimensions for each room</li>
            </ul>
          </div>
          <p>... and others. <b>Explore Relocate.</b> </p>
        </div>
      </>
    }
    </main>
  )
}

export default Landing
