import React, { useContext, useEffect, useState } from 'react';
import './ShowSubProductCost.css';
import { userContext } from '../../../App';
const ShowSubProductCost = (props) => {

    const {allTotalCost,setAllTotalCost} = useContext(userContext);
    const { quantity, img, title, price } = props.cart;


    const [foodQuantity, setFoodQuantity] = useState(quantity);

    const [totalCost, setTotalCost] = useState(parseFloat((quantity * price).toFixed(2)));
   
    useEffect(() => {
        // Add the initial totalCost to allTotalCost when component mounts
        setAllTotalCost(prevTotal => parseFloat((prevTotal + totalCost).toFixed(2)));

        // Cleanup: Subtract this totalCost from allTotalCost when the component unmounts
        return () => {
            setAllTotalCost(prevTotal => parseFloat((prevTotal - totalCost).toFixed(2)));
        };
    }, [totalCost, setAllTotalCost]);

    const handleIncrement = () => {
        const newQuantity = foodQuantity + 1;
        setFoodQuantity(newQuantity);
        setTotalCost(parseFloat((newQuantity * price).toFixed(2)));
    };

    const handleDecrement = () => {
        const newQuantity = foodQuantity > 0 ? foodQuantity - 1 : 0;
        setFoodQuantity(newQuantity);
        setTotalCost(parseFloat((newQuantity * price).toFixed(2)));
    };
  
   
    return (
        <div className="sub-container" style={{marginBottom:"5px"}}>
            <div className="food-img">
                <img src={img} alt="Food" />
            </div>
            <div className="food-info">
                <h3>{title }</h3>
                <span style={{color:"#f91944"}}> <b>${totalCost}</b> </span>
                <p>Free Delivery</p>
            </div>
            <div className="quantity-controls">
                <button className='btn-control' onClick={()=>handleDecrement()}>-</button>
                <span> <b>{foodQuantity}</b> </span>
                <button className='btn-control' onClick={()=>handleIncrement()}>+</button>
            </div>
            
        </div>
    );
};

export default ShowSubProductCost;