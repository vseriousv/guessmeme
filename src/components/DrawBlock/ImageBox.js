import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import { subscribeToCoords } from '../SocketIO/SocketIO';

import openSocket from 'socket.io-client';
import './DrawBlock.css'; 

const  socket = openSocket('http://localhost:8000');

class ImageBox extends Component {

    constructor(props) {
        super(props);   
    }

    state = {
        coordsX: 0,
        userName: localStorage.getItem("userName")
    };

    componentDidMount() {
        // subscribeToCoords(coordsXY => this.setState({coordsX: 15}));
        var canv = document.getElementById("canvas");
        var ctx = canv.getContext('2d');

        canv.style.width ='100%';
        canv.style.height='100%';
        canv.width  = canv.offsetWidth;
        canv.height = canv.offsetHeight;

        // code;
        
    }

    componentWillUpdate(newProps, newState) {
        // subscribeToCoords(coordsXY => this.setState({coordsX: coordsXY.Xcoords}))
        console.log("newProps", newProps);
        console.log("newState", newState);
    }

    render(){
        
        return (
            <Box className="imageInsert">
                COORDS_X: {this.state.coordsX}
                <canvas id="canvas" style={{display: "block"}}>Your browser is not maintain canvas</canvas>
            </Box>
        );
    }
}


export default ImageBox;