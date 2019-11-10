import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
// import './ImgBlock.css'; 


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
        localStorage.setItem('userName',this.state.value);
        window.location.reload();   
    }

    render(){
        return (
            <Box>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text" 
                            value={this.state.value} 
                            onChange={this.handleChange} 
                            placeholder="Your name" />
                    <input type="submit" value="Login"/>
                </form>
            </Box>
          );
    }
}

export default LoginForm;