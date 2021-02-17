import Card from './Card';

import React from 'react';
import Player from './Player';


class CardList extends React.Component {
    constructor(props) {
        super(props);
 this.state={
     path:'https://youtu.be/TdYUQ3gOrvQ',
     title: 'F9 the fast saga',
     descript:'descript'
 }}
    render() {
        const {data, handleSetMovie} = this.props
        let pro=this.state
        return (
            <div className='cardList'>
                {data.map((el, index) =>
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