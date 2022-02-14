import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Routes>
                    <Route path={"/dialogs*"} element={<Dialogs/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/news"} element={<Profile/>}/>
                    <Route path={"/music"} element={<Profile/>}/>
                    <Route path={"/settings"} element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
