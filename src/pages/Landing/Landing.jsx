import { Link } from 'react-router-dom'
import styles from './Landing.module.css'
import Shelflogo from '../../assets/ShelfLogo.png'
import mockupRelocate from '../../assets/mockupRelocate.png'
import packing from '../../assets/packing.png'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import aboutImg from '../../assets/About-App.png'
import teamLogo from '../../assets/Team-Logo.png'
import featuresImg from '../../assets/Features.png'


const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
    {user ?
      <>
        <h4>Welcome, {user.name}</h4>
        <img src={packing} alt="packing" className={styles.packing}/>
        <Box className={styles.buttonContainer}>
          <Paper elevation={3} >
            <div className={styles.boxContents}> 
              <h4 id='header'>TO-DO LISTS</h4>
              <Link
                to="/create-todolist"
              >
                <button variant='contained' size="small">Create to-do list</button>
              </Link>
              <Link
                to="/todolists"
              >
                <button variant='contained' size="small">View all lists</button>
              </Link>
            </div>
          </Paper>
        </Box>

        <Box className={styles.buttonContainer}>
          <Paper elevation={3} > 
            <div className={styles.boxContents}>
              <h4>WISHLISTS</h4>
                <Link to='/create-wishlist'>
                  <button variant='contained' size="small">Create wishlist</button>
                </Link>
                <Link to='/wishlists'><button variant='contained' size="small">View all wishlists</button></Link>
              </div>
          </Paper>
        </Box>
      </>
    :
      <>
        <div id='welcome-statement'> 
          <img 
            className={styles.shelf}
            src={Shelflogo} alt="relocate-shelf-logo" />
          <h2 id="brand-statement" className={styles.addTag}> Giving you peace of mind every step of the way. Worry Less. Enjoy More.</h2>
          <h2 className={styles.tag}>We make moving easier.</h2>
        </div>

        <div className={styles.choices}>
          <div className={styles.loginDiv}>
            <p className={styles.account}>Already have an account?</p>
            <button variant='contained' className={styles.landButton}><Link to="/login">Log In</Link></button>
          </div>

          <img 
            src={mockupRelocate} alt="mockup-of-app" 
            className={styles.phone}/>

          <div className={styles.signupDiv}>
            <p className={styles.signup}>New to Relocate?</p>
            <button variant='contained' className={styles.landButton}><Link to="/signup">Sign Up</Link></button>
          </div>
        </div>

        <Box className={styles.about}>
          <Paper>
            <img src={aboutImg} alt='people packing' className={styles.aboutImg}/>
            <h3 className={styles.aboutHeader}>About Relocate.</h3>
            <div className={styles.aboutInfo}>
              <p>Relocate. is a hub for all things you need when you're moving. This app makes an overwhelming experience more seamless and less stressful.</p>
              <p>Instead of using multiple documents and spreadsheets, Relocate. gives you the power to have everything in one place - all you have to do is sign-up. We wanted to create an app to help ease the stress of moving which is a notoriously bad time.</p>
            </div>
          </Paper>
        </Box>

        <Box className={styles.meetTheTeam}>
          <Paper elevation={2}>
            <h3 className={styles.mttHeader}>Meet the Team</h3>
            <div className={styles.teamBody}> 
              <img src={teamLogo} alt="team logo" className={styles.teamlogo}/>
              <p>Chaotic Good Co. is made up of a group of software developers including Steph Michael, Zeus Zaragoza-Gildo and Ryan Combest. We strive to make clean, functional products. </p>
            </div>
          </Paper>
        </Box>

        <Box className={styles.features}> 
          <Paper>
            <h3 className={styles.featuresHead}>Features</h3>
            <div className={styles.featuresImg} >
              <img src={featuresImg} alt="features graphic" />
            </div>
            <p>Relocate. allows you to:</p>
            <div className='features-list'>
              <ul>
                <li>Track to-do lists for your apartment</li>
                <li>Create a wish list and add wishlist items</li>
              </ul>
            </div>
            <p>... and others.  </p>
          </Paper>
        </Box>

        <h2 className={styles.explore}>Explore Relocate.</h2>
      </>
    }
    </main>
  )
}

export default Landing
