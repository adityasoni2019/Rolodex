import React from 'react';

import './card.styles.css';

export const Card = props =>(
    // props = key = {monster.id}, monster = {monster}
    // monster is one of the elements of the array. 
    
    <div className='card-container'>
        <img 
            alt= 'monster' 
            src= {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />
        <h2> {props.monster.name} </h2>
        <p>{props.monster.email}</p>
    </div>
)