 import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
import Link from '@material-ui/core/Link'; 
import Box from '@material-ui/core/Box'; 
import Container from '@material-ui/core/Container';

import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const [loginVisible, setLoginVisible] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {loginVisible?  
          <Button color="inherit" onClick={()=>{
            setLoginVisible(false);
          }}>Register</Button>
          :  
          <Button color="inherit" onClick={()=>{
            setLoginVisible(true);
          }}>Login</Button>
          } 
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        {loginVisible? <SignIn/> : <SignUp/> }
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
