import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
// import './ImgBlock.css'; 
 // eslint-disable-next-line
import { subscribeToMembers } from '../SocketIO/SocketIO';


class Members extends Component {
     // eslint-disable-next-line
    constructor(props) {
        super(props);
        // subscribeToStateData((err, users) => console.log("users", typeof users));
        // this.setState({
        //     users: data.users
        // }));

    }

    state ={
        users: []
    }
    render(){
        return (
            <Box>
                <div className="Members">
                    <h2>Участники</h2>
                {
                    this.props.boxImg.map(item => (                       
                        <div key={item.id}>
                            {item.img}
                        </div>                        
                    ))
                }
                </div>
            </Box>
          );
    }
}

export default Members;