import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import '../App.css';
const Products = () => {
  const [prductData, setProductData] = useState([]);
  const [productDataCat, setProductDataCat] = useState({});
  const [currentCat, setCurrentCat] = useState({});
  const [inputValue, setInputValue] = useState({});

  const fetchData = async () => {
    let APIURL = "";

    // if(currentCat && currentCat !== ''){
    //     APIURL= `http://68.178.162.203:8080/application-test-v1.1/${currentCat}`;
    // }else{
    APIURL = `http://68.178.162.203:8080/application-test-v1.1/books/`;
    const res = await axios(APIURL);
    const myData = res.data.data;
    setProductData(myData);
    console.log(myData);
  };

  fetchData();
  useEffect(() => {
    // react-hooks/exhaustive-deps
  }, [prductData]);
  return (
    <>
        <div className="container">
        <div className="card-wrapper">
        {
      prductData &&
        prductData.map((item) => {
          return (
           
                <Card item={item} />
        
          
              
            
          );
        })
        
        }
           </div>
        </div>
    </>
  );
};

export default Products;
