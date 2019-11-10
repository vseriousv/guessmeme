import React from 'react';
import './App.css'; 
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DrawBlock from './components/DrawBlock/DrawBlock';
import Members from './components/Members/Members';
import ImgBlock from './components/ImgBlock/ImgBlock';
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
  state ={
    isLogin: null,
    userName: localStorage.getItem("userName")
  }

  boxImg = [
    { id: 1, img: "boy.jpg"},
    { id: 2, img: "downey.jpg"},
    { id: 3, img: "memKeyg.jpg"},
    { id: 4, img: "boy.jpg"},
    { id: 5, img: "downey.jpg"},
    { id: 6, img: "boy.jpg"},
    { id: 7, img: "boy.jpg"},
    { id: 8, img: "memKeyg.jpg"},
    { id: 9, img: "boy.jpg"},
    { id: 10, img: "boy.jpg"}
  ]

  render(){
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
          <Container maxWidth="lg">
            <Grid container 
                  spacing={3}   
                  direction="row"
                  justify="center"
                  alignItems="flex-start">
              <Grid item xs={5}>
                <DrawBlock />
              </Grid>
              <Grid item xs={2}>
                <ImgBlock boxImg={this.boxImg} />
              </Grid>
              <Grid item xs={5}>       
                <Members  boxImg={this.boxImg}/>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
