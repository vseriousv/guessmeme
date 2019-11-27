
import React from 'react';
import "./Header.css";
import Box from '@material-ui/core/Box';
import SimpleMenu from './MenuUser';


class Header extends React.Component{

  boxAva = { id: 1, userName: localStorage.getItem('userName'), img: "boy.jpg" }
  
  render() {

    return (
        <Box className="boxHeader">
          <a href="/">
            <p className="textShadow"><b>GUESS</b></p>
            <p className="noneShadow">MEME</p> 
          </a>
          <div className="bodyBoxAva">
            <p>{this.boxAva.userName}</p>                   
            <div key={this.boxAva.id} className="ImgAva" style={{ 
                backgroundImage: "url('/images/"+this.boxAva.img+"')"}}>
            </div>
            <SimpleMenu></SimpleMenu>    
          </div>
        </Box>
    );
  }
}

export default Header;