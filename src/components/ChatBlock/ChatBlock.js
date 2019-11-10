import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';

import './ChatBlock.css'; 

class ChatBlock extends Component {
    
    render(){
        return (
            <Paper className="ChatBlock">
                <Box className="BoxExportText">
                    <Box></Box>
                </Box>
                <Divider style={{width: "100%", marginBottom: "5px"}}/>
                <Input
                    placeholder="Your text"
                    className="chatInput"
                    inputProps={{
                    'aria-label': 'description',
                    }}
                />
            </Paper>
          );
    }
}


export default ChatBlock;