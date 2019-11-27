import React,{Component} from 'react';
import DrawBox from './DrawBox';
import ImageBox from './ImageBox';

import './DrawBlock.css'; 

class DrawBlock extends Component {
    state = {
        userName: localStorage.getItem("userName")
    };

    render(){
        if(this.state.userName === 'admin'){
            return <DrawBox boxImg={this.props.boxImg} imageDrow={this.props.imageDrow}/>;
        }else{
            return <ImageBox />;           
        }
    }
}


export default DrawBlock;