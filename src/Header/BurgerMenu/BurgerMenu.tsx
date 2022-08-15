import React, {useState} from 'react';
import Nav from '../nav/Nav';
import {Burger} from '@mantine/core';
import burger from './BurgerMenu.module.scss';

const BurgerMenu: React.FC = () => {
    const [opened, setOpened] = useState(true);
    return (
        <div className={burger.burgerMenu}>
            {opened ?
                <Nav/>
                :
                <a href="https://github.com/1t-n00b" target="_blank" rel="noreferrer">it.n00b.pel</a>
            }
            <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                color="#00C4F0"
                style={{marginLeft: '15px'}}
            />
        </div>
    );
};

export default BurgerMenu;