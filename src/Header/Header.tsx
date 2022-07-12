import React from 'react';
import header from './Header.module.scss';
import Nav from './nav/Nav';
import styleContainer from '../common/styles/Container.module.scss';

const Header = () => {
    return (
        <div className={styleContainer.container}>
            <div className={header.header}>
                <div className={header.nick}>
                    <a href="https://github.com/1t-n00b" target="_blank" rel="noreferrer">it.n00b.pel</a>
                </div>
                <Nav/>
            </div>


        </div>
    );
};

export default Header;