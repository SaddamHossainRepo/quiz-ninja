import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReactQuiz = () => {
    const reactQuiz = useLoaderData();
    console.log(reactQuiz);
    return (
        <div>
            <h1>React </h1>
        </div>
    );
};

export default ReactQuiz;