import React from "react";
import { Link } from "react-router-dom";
import "./FoodItem.css";

const FoodItem = (props) => {
  const { id, title, subtitle, description, price, img } = props.food;
  return (
    <div className="col-md-4 food-item" >
    <Link style={{textDecoration:"none",backgroundColor:"#f4f4f4"}} to={`/food/${id}`} className="card-link">
      <div className="card text-center" style={{backgroundColor:"#f4f4f4"}}>
        <img src={img} alt="card" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-subtitle">{subtitle}</p>
          <p className="card-description">{description}</p>
          <h4 className="card-price">${price}</h4>
        </div>
      </div>
    </Link>
  </div>
  );
};

export default FoodItem;
