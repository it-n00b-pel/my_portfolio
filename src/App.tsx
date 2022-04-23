import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import DistantWork from "./Distant Work/DistantWork";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <DistantWork/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
