// import React from 'react'
import { Link } from 'gatsby'
// import { SocialIcon } from 'react-social-icons'
// import { PageHeader } from 'react-bootstrap'
// import AppBar from '@material-ui/core/AppBar';

// const Header = ({ siteTitle }) => (
  

// <div>
//   <AppBar>Test</AppBar>
// <PageHeader>
//   {siteTitle} <small>Subtext for header</small>
// </PageHeader>  
// </div>
 
    // <div
    //   style={{
    //     margin: '0 auto',
    //     maxWidth: 960,
    //     padding: '1.45rem 1.0875rem',
    //   }}
    // >
      // <div style={{ margin: 0 }}>
      //   <Link
      //     to="/"
      //     style={{
      //       display: 'inline',
      //       color: '#333',
      //       textDecoration: 'none',
      //     }}
      //   >
      //   </Link>
      //   </div>

// )
    //     // <SocialIcon url="https://www.linkedin.com/in/krizia-medero-4ab98914a/"/>
    //   // </div>
    //   {/* <ul style={{
    //       // display: 'inline',
    //       color: 'white',
    //       textDecoration: 'none',
    //       listStyle: 'none',
    //       textAlign: 'right'
    //     }}>
    //       <li style={{
    //         display: 'inline'
    //       }}><Link to="/">Home</Link></li>
    //       <li style={{
    //         display: 'inline'
    //       }}><Link to="/about">About Myself</Link></li>
    //       <li style={{
    //         display: 'inline'
    //       }}><Link to="/portfolio">Portfolio</Link></li>
    //     </ul> */}
    // // </div>
  

// export default Header


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes, siteTitle } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {siteTitle}
          </Typography>
          {/* <ul style={{
          display: 'inline',
          color: 'white',
           textDecoration: 'none',
           listStyle: 'none',
           textAlign: 'right'
         }}>
           <li style={{
             display: 'inline',
             color: '#FFFFFF'

           }}><Link to="/">Home</Link></li>
           <li style={{
             display: 'inline'
           }}><Link to="/about">About Myself</Link></li>
         <li style={{
           display: 'inline'
         }}><Link to="/portfolio">Portfolio</Link></li>
       </ul> */}
          <Button color="inherit" href="https://www.linkedin.com/in/krizia-medero-4ab98914a/" target="_blank">LinkedIn</Button>
          <Button component={Link} to="about" color="inherit">About</Button>
          <Button component={Link} to="about" color="inherit">Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);