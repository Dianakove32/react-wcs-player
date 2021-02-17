import { Component } from "react";
import { Button } from '@material-ui/core';
import '../main.css'

export default class Btn extends Component{

    render(){
        return(
           <div className="btn">
                <Button  variant="contained" color="primary">
  Show all movie
</Button>
           </div>

        )
    }
}