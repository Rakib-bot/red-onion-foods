import React, { useContext, useEffect, useState } from 'react';
import './Foods.css';
import { fetchFoodData } from './FoodsData';
import FoodItem from '../FoodItem/FoodItem';
import { userContext } from '../../App';
import { getData } from '../LocalStorageDB/FromDB';
import { useNavigate } from 'react-router-dom';

import basket from './shopping-bag.png'


const Foods = () => {
  const { allFoods, setFoods } = useContext(userContext);
  const [clicked, setClicked] = useState("lunch");
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const data = allFoods.filter((food) => food.category === 'lunch')
    setSelectedFoods(data);
  }, [])

  const handleClicked = (target) => {
    setClicked(target);
    const data = allFoods.filter((food) => food.category === target)
    setSelectedFoods(data);
  }
  useEffect(() => {
    const cart = getData();
    if (cart.length > 0) {
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  }, [isActive])


  const handleCartHistory = () => {

    navigate('/checkout')
  }


  return (
    <>
      <section className="food-section py-4">
        <div className="container" style={{ backgroundColor: "#f4f4f4" }}>
          <nav>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <span
                  className={`nav-link ${clicked === 'breakfast' ? 'active' : ''}`}
                  onClick={() => handleClicked('breakfast')}
                >
                  Breakfast
                </span>
              </li>
              <li className="nav-item">
                <span
                  className={`nav-link ${clicked === 'lunch' ? 'active' : ''}`}
                  onClick={() => handleClicked('lunch')}
                >
                  Lunch
                </span>
              </li>
              <li className="nav-item">
                <span
                  className={`nav-link ${clicked === 'dinner' ? 'active' : ''}`}
                  onClick={() => handleClicked('dinner')}
                >
                  Dinner
                </span>
              </li>
            </ul>
          </nav>
          <div className="row my-5">
            {selectedFoods.map((food) => (
              <FoodItem food={food} key={food.id}></FoodItem>
            ))}

          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              onClick={() => handleCartHistory()}
              className={`toggle-button ${isActive ? 'active' : 'inactive'}`}
            >
              <img src={basket} alt="basket" className="button-icon" />
              Show Cart History
            </button>
          </div>


        </div>


      </section>
    </>
  );
};

export default Foods;
