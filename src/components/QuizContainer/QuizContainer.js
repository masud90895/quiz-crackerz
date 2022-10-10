import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizContainer = () => {
    const quizsData=useLoaderData()
    return (
        <div className='mt-10 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-violet-500'>
            <div className='mb-5'>
                <h1 className='text-4xl font-bold'>Quiz of {quizsData.data.name}</h1>
            </div>
            <div>
            {
              quizsData.data.questions.map(question => <Question></Question>)
            }
            </div>
            
        </div>
    );
};

export default QuizContainer;