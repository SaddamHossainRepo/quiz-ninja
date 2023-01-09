import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-green-700 h-20 font-semibold text-2xl '>
            <div>
                <Link className='mr-20 text-violet-100 hover:text-yellow-500' to='/'>Home</Link>
                {/* <Link className='mr-20 text-violet-200 hover:text-rose-500' to='/topics'>Topics</Link> */}
                <Link className='mr-20 text-violet-300 hover:text-amber-500' to='/statistics'>Statistics</Link>
                <Link className='mr-20 text-violet-400 hover:text-green-500' to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;