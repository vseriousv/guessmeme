import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import './ImgBlock.css'; 


class ImgBlock extends Component {
   
    boxImg = [
        { id: 1, img: "boy.jpg"},
        { id: 2, img: "downey.jpg"},
        { id: 3, img: "memKeyg.jpg"},
        { id: 4, img: "boy.jpg"},
        { id: 5, img: "downey.jpg"},
        { id: 6, img: "boy.jpg"},
        { id: 7, img: "boy.jpg"},
        { id: 8, img: "memKeyg.jpg"},
        { id: 9, img: "boy.jpg"},
        { id: 10, img: "boy.jpg"}
    ]

    render(){
        return (
            <Box className="imgBlock">
                <div className="bodyBoxImg">
                {
                    this.boxImg.map(item => (                       
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