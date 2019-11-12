import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import { pushToCoords, subscribeToCoords } from '../SocketIO/SocketIO';

import './ChatBlock.css'; 

class ChatBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {chat_textarea: ''};
    
        this.handleTextarea = this.handleTextarea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 

        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 13 && e.ctrlKey) {
                this.handleSubmit(e);
            };
        });
      }

    handleTextarea(event) {
        this.setState({chat_textarea: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        var chat_textarea = document.getElementById('chat_textarea');
        chat_textarea.value = '';
        this.setState({chat_textarea: ''})
        console.log('Send message');        
    }

    render(){
        return (
            <Paper className="ChatBlock">
                <Box className="BoxExportText">
                    <Box>{this.state.chat_textarea}</Box>
                </Box>
                
                {/* <form onSubmit={this.handleSubmit}  style={{width: "100%", height: "20%", position: "relative"}}>
                
                        <Box className="boxSms">
                            <textarea
                                id="chat_textarea"
                                placeholder="Your text"
                                className="chatInput"
                                inputProps={{
                                'aria-label': 'description',
                                }}
                                onChange={this.handleTextarea}
                                >
                                {this.state.chat_textarea}
                            </textarea>
                            <div className="boxSendMessage">
                                <button type="submit" class="sendMessage" aria-label="Отправить"></button>
                            </div>
                        </Box>
                       
                    
                </form> */}
            </Paper>
          );
    }
}
export default ChatBlock;