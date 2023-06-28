import React, { useState } from 'react';


const Search = () => {

    const [inputValue, setInputValue] = useState()
    console.log(inputValue);

    return (
        <div className='container'>
            <form>
                <div className='search-wrapper'>
             
                    <input type="text" value={inputValue} placeholder='Search' />
                <button className='button'>Search</button>

                </div>
            </form>
        </div>
    );
};

export default Search;