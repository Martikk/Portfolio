import {Header} from "./layout/header/Header"
import Main from "./layout/section/main/Main";
import Skills from "./layout/section/skills/Skills";
import Projects from "./layout/section/projects/Projects";
import About from "./layout/section/about/About";
import Contact from "./layout/section/contact/Contact";
import Footer from "./layout/section/footer/Footer";
import {ContactMe} from "./components/contactMe/ContactMe";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

