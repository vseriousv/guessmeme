import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import './ImgBlock.css'; 


class ImgBlock extends Component {

    render(){
        return (
            <Box className="imgBlock">
                <div className="bodyBoxImg">
                {
                    this.props.boxImg.map(item => (                       
                        <div key={item.id} className="box_img" style={{ 
                            backgroundImage: "url('/images/"+item.img+"')"}}>
                        </div>                        
                    ))
                }
                </div>
            </Box>
          );
    }
}

export default ImgBlock;