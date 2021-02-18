import { Component } from "react";
import React from "react";
import { Paper, TextField, Button } from '@material-ui/core';
import PapperComment from "./CommentPapper";
import '../main.css'
class Comment extends React.Component {
    constructor() {
        super()
        this.state = {
            text: '',
            comment: []
        }
    }
    handleOnChange = (e) => {

            this.setState({
            text: e.target.value
        })


    }
    onClick = (item) => {
        if (this.state.text!==''){
     this.setState({
            comment: [...this.state.comment, item]
        })
    }


    }
    render() {
        const { text, comment } = this.state
        console.log(text)
        return (
            <div >
            <div className="papper2">
                <Paper className='PapperComment' elevation={6} style={{ padding: '10px' }}>
                    <TextField id="filled-basic"
                        label="Filled"
                        variant="filled"
                        fullWidth
                        label="Enter comment..."
                        value={text}
                        onChange={this.handleOnChange}
                    />
                </Paper>
                <div  >
                     <Button onClick={() => this.onClick(text)}
                variant="contained"
                color="secondary"
                size="medium"
                className="btn" >
                    Save
                    </Button>
                </div>

            </div>


               <div>
                    {comment.map(item =>
                        <Paper elevation={6}
                        style={{ padding: '10px',
                         margin: '5px',
                         width:"700px",
                         whiteSpace: 'pre-line'}}>
                        <p>{item}</p>
                        </Paper>)

                    }
                </div>
</div>

        )

    }
}
export default Comment