import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';
import Swal from 'sweetalert2';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 240px)',
      marginLeft: 240
    }
  }
}))

const Navbar = (props) => {

  const classes = useStyles()

  const { firebaseSignOut } = useContext(AuthContext);

  const history = useHistory();

  const signOutUser = async () => {
    try {
      
      await firebaseSignOut()

      history.push('/signin')

    } catch {
      Swal.fire('error', 'Oh oh we have a problem here.', 'error')
    }
  }

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={() => props.actionOpen()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            FullStackApp
          </Typography>
          <Button variant="text" color="inherit" onClick={signOutUser}>
            SignOut
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
