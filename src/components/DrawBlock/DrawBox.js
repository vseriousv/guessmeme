import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import { pushToCoords } from '../SocketIO/SocketIO';

import './DrawBlock.css'; 

class DrawBox extends Component {

    state = {
        userName: localStorage.getItem("userName")
    };

    componentDidMount() {
        var canv = document.getElementById("canvas");
        var ctx = canv.getContext('2d');
        var isDrawer = false;
        var isClick = false;
        var coords = [];

        canv.style.width ='100%';
        canv.style.height='100%';
        canv.width  = canv.offsetWidth;
        canv.height = canv.offsetHeight;

        // code;

        if(this.state.userName === 'admin'){
            console.log("DRAWER: ", this.state.userName )
            isDrawer = true;
        }

        if(isDrawer){
            canv.addEventListener('mousedown', function(e){
                isClick = true;
                pushToCoords({isClick: isClick})
            });

            canv.addEventListener('mouseup', function(e){
                isClick = false;
                ctx.beginPath();
                pushToCoords({isClick: isClick})
            });
        }

        ctx.lineWidth = 2 * 2;
        canv.addEventListener('mousemove', function(e){

            if(e.offsetX >= 449 || e.offsetY >= 449){
                isClick = false;
                ctx.beginPath();
                coords.push('mousup');
                pushToCoords({isClick: isClick})
            }
            
            if( isClick ){            
                pushToCoords({Xcoords: e.offsetX, Ycoords: e.offsetY})
                draw(e)
            }
            
        });

        const draw = (e) => {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, 2, 0, Math.PI*2);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }   
        
        function clear(){
            ctx.clearRect(0, 0, canv.width, canv.height);
            ctx.lineTo(0, 0);
            ctx.beginPath();
        }

        document.addEventListener('keydown', function(e){
            // console.log(e.keyCode);
            if(e.keyCode == 67 && e.ctrlKey){ // press key 'C'
                clear();
                pushToCoords({isClear: true});
                console.log('Clear');
            }
        });

    }


    style = {
        backgroundImage: "url(/images/memKeyg.jpg)",
        backgroundRepeate: "no-repeate"
    }

    render(){
        return (
            <Box className="imageInsert" style={this.style}>
                <canvas id="canvas" style={{display: "block"}}>Your browser is not maintain canvas</canvas>
            </Box>
        );
    }
}


export default DrawBox;