import React from 'react';
import ReactDOM from 'react-dom';
import "./Header.css";
import Box from '@material-ui/core/Box';



class Header extends React.Component {

  handleLogout(){
    localStorage.removeItem("userName");
    window.location.reload();
  }

  render(){
    return (
      <Box className="boxHeader">
        <a href="/">
          <p className="textShadow"><b>GUESS</b></p>
          <p className="noneShadow">MEME</p> 
        </a>
        <div className="headerContent"></div>
        {
          localStorage.getItem("userName") ? 
          <span className="LogoutBTN" onClick={this.handleLogout}>Выход</span> :
          <span></span>
        }
        

      </Box>
    );
  }
}

export default Header;