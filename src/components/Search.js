import React from 'react';


const Search = () => {
    return (
        <div className='container'>
            <form>
                <div className='search-wrapper'>
             
                    <input type="text" placeholder='Search' />
                <button className='button'>Search</button>

                </div>
            </form>
        </div>
    );
};

export default Search;