import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import navLogo from '../../assets/Favicon.png'

const NavBar = ({ user, handleLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className={styles.navContainer}>
        {user ?
          <>
            <Link to="/"><img className={styles.logo} src={navLogo} alt="logo"/></Link>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2, mr: 1, }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              className={styles.navMenu}
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1.5,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 16,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Link to="/changePassword">Change Password</Link>
              </MenuItem>
              <MenuItem >
                <Link to="/todolists">Your To-do Lists</Link>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                    <CardGiftcardIcon />
                </ListItemIcon>
                <Link to="/wishlists">Your Wish Lists</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/create-todolist">Create New To-do List</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/create-wishlist">Create New Wish List</Link>
              </MenuItem>
              <MenuItem >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Link to="" onClick={handleLogout}>LOG OUT</Link>
              </MenuItem>
            </Menu>
          </>
        :
          <></>
        }
      </nav>
    </>
  )
}

export default NavBar
