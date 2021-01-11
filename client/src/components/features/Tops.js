import React from 'react';

import { tops } from '../../data/data';
import TopLink from './TopLink';

const Tops = () => (
    <section>
        <h2 className='section-title'>Top 10!</h2>
        <div className='wrapper'>
            {tops.map(top10 => (
                <TopLink {...top10} />
            ))}
        </div>
    </section>
);

export default Tops;