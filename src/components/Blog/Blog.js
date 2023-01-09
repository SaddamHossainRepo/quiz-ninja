import React from 'react';

const Blog = () => {
    return (
        <div className='bg bg-slate-800'>
            <div className='ml-24 mr-24 mt-10 h-64' style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/007/343/533/small/yellow-quiz-time-banner-with-comic-style-background-suitable-for-use-for-promotional-designs-vector.jpg)` }}>
            </div>
            <div className='text-4xl  text-sky-400 mt-5 mb-5 font-medium'>
                <h1>1. The Purpose Of React Router</h1>
            </div>
            <div className='text-2xl text-sky-200 font-medium ml-5 mr-5'>
                The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route.
            </div>
            <div className='text-4xl  text-sky-400 mt-5 mb-5 font-medium'>
                <h1>2. How Does Context Api Works ?</h1>
            </div>
            <div className='text-2xl text-sky-200 font-medium ml-5 mr-5'>
            The Context API helps share data between components which you can’t easily share with props. Without context api we always should take the helps of props drilling to share the data though out the components. This technique is very messy and also complex to maintain properly.
            In short to prevent the complexity of props drilling you use context api in our react application. 
            </div>
            <div className='text-4xl  text-sky-400 mt-5 mb-5 font-medium'>
                <h1>3. UseRef</h1>
            </div>
            <div className='text-2xl text-sky-200 font-medium ml-5 mr-5'>
                The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route.
            </div>
        </div>
    );
};

export default Blog;