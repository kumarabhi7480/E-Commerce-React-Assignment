import React from 'react';
import "../App.css";
import { RxCrossCircled } from 'react-icons/rx';
const ModalBox = ({setAddBook, addBook}) => {
    return (
        <>
            <div className='container'>
                <div className='modal'>
                        <div className='modal-dialog'>
                       <div className='modal-heading'> 
                        <h3>Add Book</h3>
                        <h3 onClick={()=>setAddBook(!addBook)}><RxCrossCircled className='cross-icon' /> </h3>
                    
                        </div>
           <label> Title :</label> <input type="text" />
            <label>Author :</label> <input type="text" />
            <label>Country : </label> <input type="text" />
            <label>Language :</label> <input type="text" />
           <label> Pages :</label> <input type="text" />
          <label>  Year : </label>  <input type="number" placeholder="YYYY" min="1900" max="5000" />
          <button className='button modal-submit-btn'>Submit</button>
                        </div>
                </div>

            </div>
            
        </>
    );
};

export default ModalBox;