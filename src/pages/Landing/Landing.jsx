import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
    {user ?
      <p>yes</p>
    :
    <>
      <div className='welcome-statement'> 
          <img></img>
          <h2> Giving you peace of mind every step of the way. Worry Less. Enjoy More.</h2>
          <h2>We make moving easier.</h2>
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
          <p>..... and others. Explore Relocate. </p>
        </div>

        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        </>
    }
    </main>
  )
}

export default Landing
