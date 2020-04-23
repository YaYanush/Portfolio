import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Myskills from "./Myskills";
import Myworks from "./Myworks";
import Slogan from "./Slogan";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Header/>
                <Main/>
                <Myskills/>
                <Myworks/>
                <Slogan/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
