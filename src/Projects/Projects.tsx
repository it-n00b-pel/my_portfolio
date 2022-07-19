import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import todoImage from '../assets/img/todolist.png';
import socialImage from '../assets/img/socialNetWork.jpg';
import style from './Projects.module.scss';
import Title from '../common/components/Title';

const Projects: React.FC = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
        setIndex(selectedIndex);
    };
    const todo = {
        backgroundImage: `url(${socialImage})`,
    };
    const socialNet = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div id={'projects'} className={`${style.projectBlock}`}>
            <Title title={'My Projects'}/>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className={style.project}>
                        <div className={style.projectPhotoContainer} style={todo}>
                            <a href="https://github.com/1t-n00b" rel="noreferrer">Watch</a>
                        </div>
                        <div className={style.projectInfo}>
                            <h3>First slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel.
                            </p>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <div className={style.project}>
                        <div className={style.projectPhotoContainer} style={socialNet}>
                            <a href="https://github.com/1t-n00b" >Watch</a>
                        </div>
                        <div className={style.projectInfo}>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel.
                            </p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className={style.project}>
                        <div className={style.projectPhotoContainer}>
                            <a href="https://github.com/1t-n00b" >Watch</a>
                        </div>
                        <div className={style.projectInfo}>
                            <h3>Third slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel.
                            </p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Projects;