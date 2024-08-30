import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; // Regular icons package
import HeaderPrimary from './Components/HeaderPrimary/HeaderPrimary';
import HeaderSecondary from './Components/HeaderSecondary/HeaderSecondary';
import Feature from './Components/Feature/Feature';
import Footer from './Components/Footer/Footer';
import Foods from './Components/Foods/Foods';
import SignUp from './Components/SignUP/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import { fetchFoodData } from './Components/Foods/FoodsData';
import NotFound from './Components/NotFound/NotFound';
import FoodDetail from './Components/FoodDetail/FoodDetail';
import CheckOut from './Components/CheckOut/CheckOut';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OrderOnGoing from './Components/OrderOnGoing/OrderOnGoing';
import GoogleMap from './Components/GoogleMap/GoogleMap';
const foodData = fetchFoodData();
export const userContext = createContext();
function App() {

  const [allFoods, setAllFoods] = useState(foodData);
  const [cart, setCart] = useState([]);
  const [allTotalCost, setAllTotalCost] = useState(0);
  const [USER, setUSER] = useState({
    name: '',
    email: '',
    status: '',
    error: '',
    message: '',
    success: false

  });
  return (
    <userContext.Provider value={{ allFoods, setAllFoods, cart, setCart, allTotalCost, setAllTotalCost, USER, setUSER }}>
      <Router>
       
        <Routes>
          <Route path="/" element={
            <>
              <HeaderPrimary />
              <HeaderSecondary />
              <Foods />
              <Feature />
              <Footer />
            </>

          } />
          <Route path="/signup" element={
            <>
              <HeaderPrimary />
              <SignUp />
              <Footer />
            </>
          } />
          <Route path="/food/:id" element={
            <>
            <HeaderPrimary />
            <FoodDetail />
            <Footer />
            </>
            } />
          <Route path="/checkout" element={

            <PrivateRoute>
              <HeaderPrimary />
              <CheckOut />
              <Footer />
            </PrivateRoute>

          } />
          <Route path="/contact" element={
            <PrivateRoute>
              <HeaderPrimary />
              <Contact />
              <Footer />
            </PrivateRoute>} />
            <Route path="/orderongoing" element={
            <PrivateRoute>
            
              <OrderOnGoing />
              
            </PrivateRoute>} />
           

          <Route path="*" element={<NotFound />} />
        </Routes>
       
      </Router>


    </userContext.Provider>
  );
}

export default App;
