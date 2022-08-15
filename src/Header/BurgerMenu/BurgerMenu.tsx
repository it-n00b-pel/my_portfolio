import React, {useState} from 'react';
import Nav from '../nav/Nav';
import {Burger} from '@mantine/core';
import burger from './BurgerMenu.module.scss';
import {Fade} from 'react-awesome-reveal';

const BurgerMenu: React.FC = () => {
    const [opened, setOpened] = useState(false);
    return (
        <div className={burger.burgerMenu}>
            {opened ?
                <Fade direction={'left'}>
                    <Nav/>
                </Fade>

                :
                <Fade direction={'right'}>
                    <a href="https://github.com/1t-n00b" target="_blank" rel="noreferrer">it.n00b.pel</a>
                </Fade>

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