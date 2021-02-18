import { Component } from "react";
import { Button } from '@material-ui/core';
import '../main.css'

export default class Btn extends Component{

    render(){
        return(
           <div >
                <Button className="btn" variant="contained" color="secondary">
  Show all
</Button>
           </div>

        )
    }
}