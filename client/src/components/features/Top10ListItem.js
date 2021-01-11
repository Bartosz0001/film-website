import React from 'react';
import './top10listitem.scss';

const Top10ListItem = (props) => (
    <li className='list-item'>
        <h3 className='item-number'>{props.position}</h3>
        <div className='item-image'>
            <img src={props.image} alt={props.alt} />
        </div>
        <h3 className='item-title'>{props.title}</h3>
        <h3 className='item-rate'>{props.rate}</h3>
        <h3 className={props.profit ? 'item-rate' : 'hidden'}>${props.profit} billion</h3>
    </li>
);

export default Top10ListItem;