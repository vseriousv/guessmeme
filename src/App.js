import React from 'react';
import './App.css'; 
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import DrawBlock from './components/DrawBlock/DrawBlock';
import ChatBlock from './components/ChatBlock/ChatBlock';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container 
              spacing={3}   
              direction="row"
              justify="center"
              alignItems="flex-start">
          <Grid item xs={6}>
            <DrawBlock />
          </Grid>
          <Grid item xs={6}>       
            <ChatBlock />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
