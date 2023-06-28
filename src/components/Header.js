import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {  PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

import { Link } from 'react-router-dom';
import '../App.css';
import Search from './Search';
import FilterBar from './FilterBar';
import ModalBox from './ModalBox';
const Header = () => {
    const [searchSection, setSearchSection] = useState(false)
    const [filterSection, setFilterSection] = useState(false);
    const [addBook, setAddBook] = useState(false);
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

            <span><PiDotsThreeOutlineVerticalFill onClick={()=>setFilterSection(!filterSection)} className='search'  /> </span>
            {/* <Link   to="/" >Product</Link> */}
            <Link className='button' onClick={()=>setAddBook(!addBook)}>Add Book</Link>
          
      
            </div>
            </div>
            </nav>

            {searchSection && <Search setSearchSection={setSearchSection} />}
            {filterSection && <FilterBar setFilterSection={setFilterSection} filterSection={filterSection} />}
            {addBook && <ModalBox  setAddBook={setAddBook} addBook={addBook} />}
        </header>
    );
};

export default Header;