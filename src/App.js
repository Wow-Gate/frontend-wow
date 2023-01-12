import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
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

export default function App({ children }) {
  const [loginVisible, setLoginVisible] = useState(location.pathname || "");
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Wow
          </Typography>
          {loginVisible === "/auth/signin" ? (
            <Link href="/auth/signup" color="inherit" underline="none">
              <Button
                color="inherit" 
              >
                Register
              </Button>
            </Link>
          ) : (
            <Link href="/auth/signin" color="inherit" underline="none">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        {children}
        <Box mt={5}>
          <Footer />
        </Box>
      </Container>
    </div>
  );
}
