import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';


export const QuizContext = createContext([])
const Main = () => {
    const getLoaderData = useLoaderData()
    
    return (
        <QuizContext.Provider value={getLoaderData}>
            <Header></Header>
            <Outlet></Outlet>
        </QuizContext.Provider>
    );
};

export default Main;