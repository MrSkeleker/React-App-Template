import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='border-b p-3 flex justify-between items-center'>
            <Link to='/'>
                <h1 className='font-bold'>MyApp</h1>
            </Link>
            <Navigation />
        </header>
    )
}

export default Header;