import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import { pushToCoords } from '../SocketIO/SocketIO';

import './DrawBlock.css'; 

class DrawBox extends Component {

    constructor(props) {
        super(props);
    }

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
            });

            canv.addEventListener('mouseup', function(e){
                isClick = false;
                ctx.beginPath();
                coords.push('mousup');
            });
        }

        ctx.lineWidth = 2 * 2;
        canv.addEventListener('mousemove', function(e){
            
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
        
        function save(){
            localStorage.setItem('coords', JSON.stringify(coords))
        }

        function replay(){
            var timer = setInterval(function(){
                if(!coords.length){
                    clearInterval(timer);
                    ctx.beginPath();
                    return; 
                }
                var crd = coords.shift()
                var e = {
                    offsetX: crd["0"],
                    offsetY: crd["1"]
                }
                draw(e);
            }, 20);
        }

        function clear(){
            ctx.clearRect(0, 0, canv.width, canv.height);
        }

        document.addEventListener('keydown', function(e){
            // console.log(e.keyCode);
            if(e.keyCode == 67){ // press key 'C'
                clear();
                console.log('Clear');
            }
            if(e.keyCode == 83){ // press key 'S'
                save();
                console.log('Saved');
            }
            if(e.keyCode == 82){ // press key 'R'
                console.log('Replay ....');
                coords = JSON.parse(localStorage.getItem('coords'));
                clear();
                replay(); 
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
                This is the timer value: {this.state.coordsX} 
                <canvas id="canvas" style={{display: "block"}}>Your browser is not maintain canvas</canvas>
            </Box>
        );
    }
}


export default DrawBox;