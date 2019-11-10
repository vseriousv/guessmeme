import React,{Component} from 'react';
import Box from '@material-ui/core/Box';

import DrawBox from './DrawBox';
import ImageBox from './ImageBox';

import './DrawBlock.css'; 

class DrawBlock extends Component {
    state = {
        userName: localStorage.getItem("userName")
    };

    render(){
        if(this.state.userName == 'admin'){
            return <DrawBox />;
        }else{
            return <ImageBox />;           
        }
    }
}


export default DrawBlock;