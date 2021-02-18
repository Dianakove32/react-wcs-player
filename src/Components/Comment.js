import { Component } from "react";
import React from "react";
import { Paper, TextField } from '@material-ui/core';
import PapperComment from "./CommentPapper";
class Comment extends React.Component{
    constructor(){
        super()
        this.state={
            text:'',
            comment:[]
        }}
        handleOnChange=(e)=>{
            this.setState({
                text: e.target.value
            })
        }
        onClick=(item)=>{


            this.setState({
                 comment:[...this.state.comment,item]
            })
        }
    render(){
const {text, comment}=this.state
console.log(text)
        return(
        <div className="papper2">
               <Paper elevation = {6} style = {{padding:'10px'    }}>

               <TextField id="filled-basic"
               label="Filled"
               variant="filled"
                fullWidth
                label = "Enter comment..."
                value={text}
                    onChange={this.handleOnChange}
                />
       </Paper>
       <button onClick={()=>this.onClick(text)}></button>
       <div>
            {comment.map(item => {
                return <p>{item}</p>
            }
  )
            }
       </div>


        </div>

        )

    }
}
export default Comment