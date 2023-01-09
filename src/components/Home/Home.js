import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import banner from '../../photos/quiz-banner.webp'
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizData = useLoaderData([]);
    const singleQuiz = quizData.data;

    console.log(singleQuiz);
    
    return (
        <div>
            <div className='ml-24 mr-24 mt-10 h-64' style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/007/343/533/small/yellow-quiz-time-banner-with-comic-style-background-suitable-for-use-for-promotional-designs-vector.jpg)`}}>
            <p className='text-4xl bg-amber-900 hover:bg-amber-600 text-lime-500 hover:text-black font-mono '>Test Your knowledge, Build Confidence! </p>
            </div>
            <div className='grid grid-cols-2 mt-10'>
                {
                    singleQuiz.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;