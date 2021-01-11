import React, { useEffect, useState } from 'react';

import { articles } from '../../data/data';
import './article.scss';

const Article = (props) => {
    console.log('props: ', props);
    const [currentArticle, setCurrentArticle] = useState({});

    useEffect(() => {
        setCurrentArticle(articles.find(article => article.id === props.match.params.id));
    }, []);

    return (
        <section className='article'>
            <div className='article-image'><img src={currentArticle.image} alt={currentArticle.alt} /></div>
            <h2 className='article-title'>{currentArticle.name}</h2>
            <p className='article-content'>{currentArticle.content}</p>
        </section>
    );
}

export default Article;