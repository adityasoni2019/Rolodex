import React from 'react';
import './card-list.styles.css';

import {Card} from '../card/card.component';

export const CardList = (props) =>(

    // console.log("Hello");
    // console.log(props);    
    <div className='card-list'>
        {props.monsters_prop.map(monster =>(
        // monsters_prop: []
            <Card key = {monster.id} monster = {monster}/> 
        ))}
        {console.log(props)}
    </div>
);
// hey this is the new branch.
