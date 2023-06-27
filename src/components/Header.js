import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { PiDotsThreeOutlineVerticalBold } from 'react-icons/pi';

import { Link } from 'react-router-dom';
import '../App.css';
import Search from './Search';
const Header = () => {
    const [searchSection, setSearchSection] = useState(false)
    return (
        <header>
            <nav className=''>
            <div className='header-wrapper container'>
      
            <div>
                <h3>E-BOOK</h3>
            </div>
   
            <div className='header-link'>
            {/* <Link  to="/" >Home</Link> */}
            <span><BsSearch onClick={()=>setSearchSection(!searchSection)} className='search' /> </span>
            <span><PiDotsThreeOutlineVerticalBold className='search' /> </span>
            {/* <Link   to="/" >Product</Link> */}
            <Link className='button'>Add Book</Link>
          
      
            </div>
            </div>
            </nav>

            {searchSection && <Search setSearchSection={setSearchSection} />}
        </header>
    );
};

export default Header;