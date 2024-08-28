import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import {
    faCheckCircle,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FoodDetail.css'; // Import the updated CSS file
import { getData, updateData } from '../LocalStorageDB/FromDB';

const foodDB = getData();
const FoodDetail = () => {
    const { id } = useParams();
    const { allFoods, setAllFoods } = useContext(userContext);

    const foodDetailData = foodDB.find((item) => item.id === parseInt(id));
    const food = allFoods.find((food) => food.id === parseInt(id));

    const [cart, setCart] = useState(foodDetailData ? foodDetailData : food);


    const [foodQuantity, setFoodQuantity] = useState(cart.quantity ? cart.quantity : 0);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleCartUpdate = () => {
        cart.quantity = foodQuantity;
        setCart(cart);
        updateData(cart);

        setIsSuccess(true);

    }

    return (
        <div className="food-detail">
            <div className="row">
                <div className="col-md-6 py-5">
                    <h1>{food.title}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                        consequuntur? Similique quasi quis molestiae praesentium? Quo
                        dolorum distinctio consectetur quis unde, neque repellendus.
                        Consequuntur obcaecati nulla blanditiis quisquam, suscipit iste
                        omnis non aliquid, ea animi et distinctio eligendi, consectetur
                        excepturi!
                    </p>
                    <div className="d-flex mt-4">
                        
                        <div className="cart-item">
                        <h2> <span style={{marginRight:"20px"}}>${food.price}</span></h2>
                            <div className="quantity-container ">
                                <button
                                    style={{color:"black",fontSize:"20px"}}
                                    className="quantity-button"
                                    onClick={() => setFoodQuantity(foodQuantity < 1 ? 0 : foodQuantity - 1)}
                                >
                                    -
                                </button>
                                <span className="quantity-display">{foodQuantity}</span>
                                <button
                                 style={{color:"red",fontSize:"25px"}}
                                    className="quantity-button"
                                    onClick={() => setFoodQuantity(foodQuantity + 1)}
                                >
                                    +
                                </button>
                            </div>

                        </div>

                        <br />
                        
                    </div>
                    <div className=" cart-add-food">
                            <button
                                style={{borderRadius:"10px"}}
                                className="cart-add"
                                onClick={() => handleCartUpdate()}
                            >
                                <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                            </button>
                            <br />
                            {isSuccess && (
                                <p className="success-msg">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Food Added
                                    Successfully To Cart
                                </p>
                            )}
                        </div>
                </div>
                <div className="col-md-6">
                    <img className="large-img" src={food.img} alt="" />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img
                            className="small-img"
                            src={food.img}
                            alt=""
                        />
                    </div>
                    <div className="col-md-3">
                        <img
                            className="small-img"
                            src={food.img}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;
