import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    makeStyles
} from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../../context/AuthContext';

const listStyles = makeStyles(theme => ({
    content: {
        marginTop: '20px',
        flexDirection: 'column',
        fontStyle: 'italic',
        fontVariantCaps: 'all-small-caps'
    }
}))

const Lists = (props) => {

    const classes = listStyles();

    const { currentUser } = useContext(AuthContext);

    return (
        <div className="animate__animated animate__fadeInLeft">
            <List component="nav">
                <Link to="/home" onClose={props.onClose ? props.onClose : null}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/add" onClose={props.onClose ? props.onClose : null}>
                    <ListItem button>
                        <ListItemIcon>
                            <ControlPointIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add" />
                    </ListItem>
                </Link>
                <Divider />
                <ListItem button className={classes.content}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={currentUser.email} />
                </ListItem>
            </List>
        </div>
    )
}

export default Lists
