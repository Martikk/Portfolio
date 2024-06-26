import {Header} from "./layout/header/Header"
import Main from "./layout/section/main/Main";
import Skills from "./layout/section/skills/Skills";
import Projects from "./layout/section/projects/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
        </div>
    );
}

export default App;

