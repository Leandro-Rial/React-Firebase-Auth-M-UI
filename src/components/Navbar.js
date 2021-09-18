import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const { currentUser, firebaseSignOut } = useContext(AuthContext);

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
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          FirebaseAuth
        </Typography>
        <Box sx={{ mr: 3 }}>
          <Typography color="inherit">
            {currentUser.email}
          </Typography>
        </Box>
        <Button color="inherit" onClick={signOutUser}>
          SignOut
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;