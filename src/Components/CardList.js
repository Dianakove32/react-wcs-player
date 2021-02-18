import Card from './Card';
import { Button } from '@material-ui/core';
import React from 'react';
import '../main.css'


class CardList extends React.Component {
    constructor(props) {
        super(props);
 this.state={
     path:'https://youtu.be/TdYUQ3gOrvQ',
     title: 'F9 the fast saga',
     descript:'descript'
 }

}

    render() {
        const {dataF, handleSetMovie, isFiltered, isEmpty,showAll} = this.props




        return (
            <div className='cardList'>
             {isFiltered? <Button className='btn'  variant="contained" color="secondary"  onClick={()=>showAll()}>
  Show all movie </Button> :null}
   { isEmpty ? <p>No video</p>:null}
                {dataF.map((el, index) =>
                    <Card {...el} key={index} handleSetMovie = {handleSetMovie}
                    />

                )}


            </div>
        )
    }
}

export default CardList;


// {data.map((el, index) => (
//                 <Card {...el}
//                     key={index}

//                 />
//             ))};