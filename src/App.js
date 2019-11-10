import React from 'react';
import './App.css'; 
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DrawBlock from './components/DrawBlock/DrawBlock';
import ChatBlock from './components/ChatBlock/ChatBlock';
import ImgBlock from './components/ImgBlock/ImgBlock';

function App() {
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
            <ImgBlock />
          </Grid>
          <Grid item xs={5}>       
            <ChatBlock />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
