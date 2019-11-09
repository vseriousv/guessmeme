import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import { socketIO } from '../SocketIO/SocketIO';

import './DrawBlock.css'; 

class DrawBlock extends Component {

    constructor(props) {
        super(props);
        socketIO((err, timestamp) => this.setState({
          timestamp
        }));
    }

    state = {
        timestamp: 'no timestamp yet'
    };

    componentDidMount() {
        var canv = document.getElementById("canvas");
        var ctx = canv.getContext('2d');

        var isClick = false;

        canv.style.width ='100%';
        canv.style.height='100%';
        canv.width  = canv.offsetWidth;
        canv.height = canv.offsetHeight;

        // code;
        canv.addEventListener('mousedown', function(e){
            isClick = true;
        });

        canv.addEventListener('mouseup', function(e){
            isClick = false;
            ctx.beginPath();
        });

        ctx.lineWidth = 2 * 2;
        canv.addEventListener('mousemove', function(e){
            
            if( isClick ){

                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(e.offsetX, e.offsetY, 2, 0, Math.PI*2);
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(e.offsetX, e.offsetY);

            }
        });
    }
    render(){
        return (
            <canvas id="canvas" style={{display: "block"}}>Your browser is not maintain canvas</canvas>
          );
    }
}


export default DrawBlock;