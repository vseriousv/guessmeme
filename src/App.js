import React from 'react';
import './App.css'; 
import { Container, Grid, Box } from '@material-ui/core';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ChatBlock from './components/ChatBlock/ChatBlock';
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
      this.state.imageDrow = this.imageRandom(0, 9);
  }

  state ={
    isLogin: null,
    userName: localStorage.getItem("userName"),
    imageDrow: 0
  }

  boxImg = [
    { id: 0, img: "boy.jpg"},
    { id: 1, img: "downey.jpg"},
    { id: 2, img: "memKeyg.jpg"},
    { id: 3, img: "boy.jpg"},
    { id: 4, img: "downey.jpg"},
    { id: 5, img: "boy.jpg"},
    { id: 6, img: "boy.jpg"},
    { id: 7, img: "memKeyg.jpg"},
    { id: 8, img: "boy.jpg"},
    { id: 9, img: "boy.jpg"}
  ]

  imageRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var imageNumber = Math.floor(Math.random() * (max - min)) + min;
    return imageNumber;
  }

  render(){
    // console.log("APP BOX: ",this.boxImg[this.state.imageDrow].img);
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
                <DrawBlock boxImg={this.boxImg} imageDrow={this.state.imageDrow}/>
              </Grid>
              <Grid item xs={2}>
                <ImgBlock boxImg={this.boxImg} />
              </Grid>
              <Grid item xs={5}>       
                {/* <Members  boxImg={this.boxImg}/> */}
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
