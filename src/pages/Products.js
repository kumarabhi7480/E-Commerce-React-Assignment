import axios from "axios";
import React, { createElement, useEffect, useState } from "react";
import Card from "../components/Card";
import "../App.css";
import PaginationEle from "../components/PaginationsEle";

const Products = () => {
  const [prductData, setProductData] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [paginationEle, setPaginationEle] = useState();
  const [productDataCat, setProductDataCat] = useState({});
  const [currentCat, setCurrentCat] = useState({});
  const [inputValue, setInputValue] = useState({});
  const fetchData = async () => {
    let APIURL = "";

    // if(currentCat && currentCat !== ''){
    //     APIURL= `http://68.178.162.203:8080/application-test-v1.1/${currentCat}`;
    // }else{
    APIURL = `http://68.178.162.203:8080/application-test-v1.1/books?page=2`;
    const res = await axios(APIURL);
    const myData = res.data;
    setProductData(myData.data);
    setTotalPages(myData.pagination.totalPages);
    console.log(res.data);
    let aEle = [];
    for (let i = 1; i <= myData.pagination.totalPages; i++) {
      aEle.push(i);
    }
    setTotalPages(aEle);
  };

  useEffect(() => {
    fetchData();

    // react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container">
        <div className="card-wrapper">
          {prductData &&
            prductData.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
        </div>
        <div className="pagination">
          {totalPages &&
            totalPages.map((num) => <PaginationEle num={num} />
            )}
        </div>
      </div>
    </>
  );
};

export default Products;
