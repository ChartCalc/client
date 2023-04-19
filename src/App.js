import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Dispersion from "./components/Dispersion/Dispersion";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/dispersion"} element={<Dispersion/>}/>
            </Routes>
        </div>
    );
}

export default App;
