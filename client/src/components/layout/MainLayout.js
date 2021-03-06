import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({children}) => (
    <div>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;