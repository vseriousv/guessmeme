import React from 'react';
import './App.css'; 
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ChatBlock from './components/ChatBlock/ChatBlock';
import DrawBlock from './components/DrawBlock/DrawBlock';
import Members from './components/Members/Members';
import ImgBlock from './components/ImgBlock/ImgBlock';
import { Box } from '@material-ui/core';
import LoginForm from './components/LoginForm/LoginForm'
import { login } from './components/SocketIO/SocketIO';

class App extends React.Component {
  constructor(props){
    super(props)
    if (  this.state.userName === null || 
          this.state.userName === undefined || 
          this.state.userName === '' ||
          this.state.userName === 'undefined')
    {
      this.state.isLogin = false;
    }else{ 
      this.state.isLogin = true;
      login({userName: this.state.userName});
    }
  }
  state = {
    isLogin: null,
    userName: localStorage.getItem("userName")
  }

  render() {
    console.log(this.state.isLogin);
    if(!this.state.isLogin){
      return (
        <div className="content">
          <Header />
          <Container maxWidth="lg">
              <LoginForm />
          </Container>
          <Footer />
        </div>
      );
    }else{
      return (
        <div className="content">
          <Header />
          <div className="boxContainer">
            <div className="boxDrawBlock">  
              <DrawBlock />
              <ImgBlock />
            </div>
            <ChatBlock />
          </div>
          <Footer />
        </div>
      );
    }
  }
}
export default App;
