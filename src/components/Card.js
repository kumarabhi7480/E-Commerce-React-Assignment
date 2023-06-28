import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card shadow">
      <Link>
        <h3>Title : {item.title}</h3>
        <h3>Author : {item.author}</h3>
        <h3>Country : {item.country}</h3>

        <h3>Language : {item.language}</h3>
        <h3>Pages : {item.pages}</h3>
        <h3>Year : {item.year}</h3>
        <button className="button">Edit</button>
      </Link>
    </div>
  );
};

export default Card;
