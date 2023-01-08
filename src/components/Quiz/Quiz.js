import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;

    const [quizButton, setQuizButton] = useState()
    const handleStartQuiz = (name) =>{
        console.log('clicked', name);
    }
    return (
        <div className='bg-blue-400 hover:bg-blue-900 mb-10 mr-2 ml-2 border rounded-md'>
            <img className='h-60 border-4 ml-24 mt-4 rounded-full bg-slate-900 hover:bg-slate-500 border-indigo-500' src={logo} alt="" />
            <div>
            <p className='text-3xl text-fuchsia-700 font-bold font-serif'>{name}</p>
            <p className='font-sans font-medium'>Number of Questions: {total}</p>
            <Link to={`/quiz/${id}`}>
            <button onClick={()=>handleStartQuiz(name)} className='border-y-4 border-Neutral-500 bg-gradient-to-r from-slate-800 via-yellow-500 to-green-500 text-red-50 font-mono p-1 rounded mt-4 mb-4 hover:bg-lime-900'>Start Quiz</button>
            </Link>
            </div>
        </div>
    );
};

export default Quiz;