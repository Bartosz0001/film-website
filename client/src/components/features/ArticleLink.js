import React from 'react';

import { Link } from 'react-router-dom';
import './articleLink.scss';

const ArticleLink = (item) => {
    return (
        <div className='link'>
            <Link to={`/article/${item.id}`}>
              <div className='link-image'>
                <img src={item.image} alt={item.alt} />
              </div>
              <h3 className='link-title article-title'>{item.name}</h3>
            </Link>
        </div>
    )
}

export default ArticleLink;