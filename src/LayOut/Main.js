import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer'; 


export const QuizContext = createContext([])
const Main = () => {
    const getLoaderData = useLoaderData()
    
    return (
        <QuizContext.Provider value={getLoaderData}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizContext.Provider>
    );
};

export default Main;