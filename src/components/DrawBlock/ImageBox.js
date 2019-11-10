import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import { subscribeToStateData } from '../SocketIO/SocketIO';

import './DrawBlock.css'; 

class ImageBox extends Component {
    constructor(props) {
        super(props);
        subscribeToStateData((err, data) => this.setState({
            coordsX: data.Xcoords,
            coordsY: data.Ycoords,
            isClick: data.isClick,
            isClear: data.isClear
        }));

    }

    state ={
        coordsX: 0,
        coordsY: 0,
        isClick: false,
        isClear: false
    }

    componentDidMount() {
        var canv = document.getElementById("canvas");

        canv.style.width ='100%';
        canv.style.height='100%';
        canv.width  = canv.offsetWidth;
        canv.height = canv.offsetHeight;
    }

    componentWillUpdate(newProps, newState){
        var canv = document.getElementById("canvas");
        var ctx = canv.getContext('2d');

        if( this.state.isClick ){ 
            ctx.beginPath();
        }
        if( this.state.isClear ){ 
            ctx.clearRect(0, 0, canv.width, canv.height);
            ctx.lineTo(0, 0);
            ctx.beginPath();
            this.setState({isClear: false});
        }

        ctx.lineWidth = 2 * 2;
        
        ctx.lineTo(this.state.coordsX, this.state.coordsY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.state.coordsX, this.state.coordsY, 2, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.state.coordsX, this.state.coordsY);

    }

    render(){
        
        return (
            <Box className="imageInsert" style={{position: "relative"}}>
                <canvas id="canvas" style={{display: "block"}}>Your browser is not maintain canvas</canvas>
            </Box>
        );
    }
}


export default ImageBox;