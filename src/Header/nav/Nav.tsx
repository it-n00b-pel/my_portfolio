import React from 'react';
import style from './Nav.module.scss';
import {Link} from 'react-scroll';

const Nav = () => {
    return (
        <div className={style.nav}>
            <Link className={style.link}
                  to="main"
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>Main</Link>
            <Link className={style.link}
                  to="skills"
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>Skills</Link>
            <Link className={style.link}
                  to="projects"
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>Projects</Link>
            <Link className={style.link}
                  to="contact"
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>Contact</Link>
        </div>

    );
};

export default Nav;