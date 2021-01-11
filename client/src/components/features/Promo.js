import React from 'react';
import ArticleLink from './ArticleLink';
import { articles } from '../../data/data';

const Promo = () => {
    return (
    <section className='promo'>
        <h2 className='section-title'>What's new?</h2>
        <div className='wrapper'>
            {articles.map(article => (
                <ArticleLink {...article} />
            ))}
        </div>
    </section>
    );
}

export default Promo;