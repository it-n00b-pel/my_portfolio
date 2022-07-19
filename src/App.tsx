import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import style from './App.module.scss';
import Projects from './Projects/Projects';

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Main/>
            <Skills/>
            {/*<Works/>*/}
            <Projects/>
            {/*<DistantWork/>*/}
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
