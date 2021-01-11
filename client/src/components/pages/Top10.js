import React, { useEffect, useState } from 'react';

import { tops } from '../../data/data';
import './article.scss';
import Top10ListItem from '../features/Top10ListItem';

const Top10 = (props) => {
    const [current, setCurrent] = useState({});
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        setCurrent(tops.find(top => top.id === props.match.params.id));
        setItemList(tops.find(top => top.id === props.match.params.id).content);
    }, []);

    return (
        <section className='article'>
            <div className='article-image'>
                <img src={current.image} alt={current.alt} />
            </div>
            <h2 className='article-title'>{current.name}</h2>

            <ul className='article-list'>
              {itemList.map(item => (
                <Top10ListItem {...item} />
              ))}
            </ul>
        </section>
    );
}

export default Top10;