import React from 'react';
import header from './Header.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Nav from './nav/Nav';

const Header = () => {

    return (

        <div className={header.header}>
            <div className={styleContainer.container}>
                <div className={header.nick}>
                    <a href="https://github.com/1t-n00b" target="_blank" rel="noreferrer">it.n00b.pel</a>
                </div>
                <div className={header.navBlock}>
                    <Nav/>
                </div>
                <div className={header.burgerBlock}>
                    <BurgerMenu/>
                </div>


            </div>
        </div>
    );
};

export default Header;