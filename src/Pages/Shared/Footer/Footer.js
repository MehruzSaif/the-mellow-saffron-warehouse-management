import React from 'react';

const Header = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 footer-all'>
            <p><span className='footer-title'>The Mellow Saffron</span> © {year}</p>
        </footer>
    );
};

export default Header;