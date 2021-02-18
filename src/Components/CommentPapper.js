import { Component } from "react";
import { Paper } from '@material-ui/core';
import '../main.css'

export default class PapperComment extends Component{
    render(){
        return(
            <div  className='PapperComment'>
            <Paper elevation = {6} style = {{padding:'10px'}}/>
</div>
        )
    }
}