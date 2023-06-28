import React from 'react';
import { RxCrossCircled } from "react-icons/rx"
import "../App.css"
const FilterBar = ({setFilterSection, filterSection}) => {
    return (
        <>
        <div className='filter-wrapper'>
                <div className='filter-header'>
                    <h3>FILTERS</h3>
                    <h3 onClick={()=>setFilterSection(!filterSection)}><RxCrossCircled className='cross-icon' /> </h3>
                    
                </div>
                <hr />
                <div className='sort-by-wrpper'>
                        <h4>Sort by Year</h4>
                    <input type="number" placeholder="YYYY" min="1900" max="2025" />
                    <label>Year</label>
                </div>
                <div className='sort-by-page'>
                    <h4>Sort by Pages</h4>
                <div>
                <input type="radio" />
                    <label>500 to above</label>
                </div>
                    <div>
                    <input type="radio" />
                    <label>400 to above</label>
                    </div>
                   <div>
                   <input type="radio" />
                    <label>300 to above</label>
                   </div>
                   <div>
                   <input type="radio" />
                    <label>200 to above</label>
                   </div>
                  <div>
                      <input type="radio" />
                    <label>1 to above</label>
                  </div>
                
                </div>
        </div>
            
        </>
    );
};

export default FilterBar;