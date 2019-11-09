import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import DrawCanvas from './DrawCanvas';

import './DrawBlock.css'; 

class DrawBlock extends Component {
    render(){
        return (
            <Box className="DrawBlock">
                <DrawCanvas />
            </Box>
          );
    }
}


export default DrawBlock;