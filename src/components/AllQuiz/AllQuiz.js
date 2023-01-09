import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AllQuiz = () => {
    const quizData = useLoaderData();
    const { logo, name } = quizData.data;
    // const {questions, id} = quizData.data;
    const question = [...quizData.data.questions].map(question => {
        question.isCorrect = false;
        return question;
    });
    // const options = questions.options;
    // console.log('quiz data', quizData.data);
    // console.log('questions', questions);

    const [questions, setQuestions] = useState(question);

    let number = 1;
    
    const handleAnswer = (id, option) =>{
        
        const newQuestions = [...questions].map(question => {
            if(question.id === id){
                
                if(question.correctAnswer === option){
                    question.isCorrect = true;

                }
                else{
                    question.isCorrect = false;
                }
                console.log(question)
            }
            return question;
        })
        setQuestions(newQuestions);
        console.log(questions);
        
    }

    

    // { quizData.data.questions.correctAnswer === option ? "correct" : "try again"};

    
    return (
        <div className='bg bg-purple-200'>
            <h1 className='text-2xl p-10 bg-green-100 text-lime-900 font-semibold '>Welcome to the Quiz of <span className='text-indigo-900 font-extrabold text-2xl'>{name}</span></h1>
            {/* <img src={logo} alt="" /> */}
            {/* <p>{`questions${id}`}</p> */}
            {
                questions.map(question =>
                    <div className='mb-10 ml-10 mr-10 rounded-3xl bg bg-indigo-200 p-10 border-2 border-sky-500 '>
                        <div className='flex justify-center '>
                            <p className='mb-5 bg bg-purple-50 shadow-lg shadow-cyan-500/50 p-6 border-2 border-sky-500 rounded-md text-xl font-mono text-blue '>Quiz-{number++}{question.question}</p>
                            {/* {const correctAns = question.correctAnswer } */}
                            <div className='ml-12 flex justify-end'>
                                <button onClick={()=>{
                                    toast.success(question.correctAnswer,{position: toast.POSITION.TOP_CENTER}, {autoClose: 100})
                                    
                                }}>
                                    <ToastContainer></ToastContainer>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2  mr-24 p-5  justify-items-center'>
                            {
                                question.options.map(option =>
                                    <div className=' text-blue align-middle mt-2  w-3/4 ml-32  border-2 border-sky-500 bg-purple-50 shadow-lg shadow-cyan-500/50 hover:bg-purple-100 rounded-3xl mb-2 p-2 font-sans'>
                                        <button onClick={() => {question.correctAnswer === option ?
                                                                     toast.success('correct',  {autoClose: 300}) 
                                                                     : toast.warning('false',  {autoClose: 300})
                                                                }
                                                        }   
                                        // handleAnswer(question.id, option) 
                                        >
                                            <div>
                                                <div value={question.correctAnswer}>{option}</div>
                                                
                                            </div>
                                        </button>
                                        
                                    </div>)
                                    
                            }
                            
                        </div>
                    </div>)
            }
        </div>
    );
};

export default AllQuiz;