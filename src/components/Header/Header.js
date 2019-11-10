import React from 'react';
import ReactDOM from 'react-dom';
import "./Header.css";
import Box from '@material-ui/core/Box';


function Header() {
  return (
      <Box className="boxHeader">
        <a href="/">
          <p className="textShadow"><b>GUESS</b></p>
          <p className="noneShadow">MEME</p> 
        </a> 
      </Box>
  );
}

export default Header;