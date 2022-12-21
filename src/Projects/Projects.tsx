import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import todoImage from '../assets/img/todo.png';
import socialImage from '../assets/img/socialNetwork.png';
import snake2d from '../assets/img/snake.png';
import neows from '../assets/img/NeoWs.png';
import card from '../assets/img/cards.png';
import style from './Projects.module.scss';
import Title from '../common/components/Title';
import {Fade} from 'react-awesome-reveal';

const Projects: React.FC = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
        setIndex(selectedIndex);
    };
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };
    const socialNet = {
        backgroundImage: `url(${socialImage})`,
    };

    const cards = {
        backgroundImage: `url(${card})`,
    };

    const snake = {
        backgroundImage: `url(${snake2d})`,
    };

    const neoWs = {
        backgroundImage: `url(${neows})`,
    };
    return (
        <div id="projects" className={`${style.projectBlock}`}>
            <Title title={'My Projects'}/>
            <Fade direction="down">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className={style.project}>
                            <div className={style.projectPhotoContainer} style={todo}>
                                <a href="https://github.com/it-n00b-pel/todolist" rel="noreferrer">Watch</a>
                            </div>
                            <div className={style.projectInfo}>
                                <h3>TodoList</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat
                                    vel.
                                </p>
                            </div>
                        </div>

                    </Carousel.Item>

                    <Carousel.Item>
                        <div className={style.project}>
                            <div className={style.projectPhotoContainer} style={socialNet}>
                                <a href="https://github.com/it-n00b-pel/some_Net" rel="noreferrer">Watch</a>
                            </div>
                            <div className={style.projectInfo}>
                                <h3>Social Network</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat
                                    vel.
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className={style.project}>
                            <div className={style.projectPhotoContainer} style={cards}>
                                <a href="https://github.com/Murzzik/cards-project" rel="noreferrer">Watch</a>
                            </div>
                            <div className={style.projectInfo}>
                                <h3>CARDS</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat
                                    vel.
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className={style.project}>
                            <div className={style.projectPhotoContainer} style={snake}>
                                <a href="https://github.com/it-n00b-pel/snake_2d-v1" rel="noreferrer">Watch</a>
                            </div>
                            <div className={style.projectInfo}>
                                <h3>Snake 2D</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat
                                    vel.
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className={style.project}>
                            <div className={style.projectPhotoContainer} style={neoWs}>
                                <a href="https://github.com/it-n00b-pel/Asteroids" rel="noreferrer">Watch</a>
                            </div>
                            <div className={style.projectInfo}>
                                <h3>NeoWs</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat
                                    vel.
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Fade>
        </div>

    );
};

export default Projects;