import React, { useContext, useEffect, useRef, useState } from 'react';
import { getData } from '../LocalStorageDB/FromDB';
import { useForm } from 'react-hook-form';
import ShowSubProductCost from './ShowSubProductCost/ShowSubProductCost';
import { userContext } from '../../App';
import './CheckOut.css';
import { useNavigate } from 'react-router-dom';


const CheckOut = () => {


    const navigate =useNavigate();
    const [data,setData]= useState([]);
    const { allTotalCost } = useContext(userContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [DeliveryInfo, setDeliveryInfo] = useState({});
    const [isSaved, setIsSaved] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [formAddress,setFormAddress] = useState('');
    const onSubmit = (data) => {
        console.log(data)
        setDeliveryInfo(data);
        setIsSaved(true);
        setIsActive(!isActive);
        setFormAddress(data.address);
    }

    useEffect(() => {
         setData(getData())
    }, [data])

    const handlePlaceOrder = ()=>{
        navigate('/contact',{ state: { address: formAddress } })
    }

    return (
        <div className='checkout-container'>

            <div className="row">

                <div className="col-md-8 px-4" style={{ marginTop: "100px" }}>

                    <h3 style={{ marginLeft: "155px" }}>Edit Delivery Details</h3>
                    <hr style={{ border: "1px solid black", width: "50%", marginLeft: "155px" }} />


                    <form onSubmit={handleSubmit(onSubmit)} className='form-edit'>

                        <input className='form-input' {...register("deliveryType", { required: true })}
                            placeholder="Delivery Type"
                            defaultValue={"Deliver To Door"} />

                        {errors.deliveryType && <span className="error">This field is required</span>}
                        <br />
                        <input className='form-input' {...register("roadName", { required: true })}

                            placeholder="Enter Road Name"

                        />
                        {errors.roadName && <span className="error">This field is required</span>}

                        <br />
                        <input className='form-input' {...register("address", { required: true })}

                            placeholder="Enter Address"

                        />
                        {errors.address && <span className="error">This field is required</span>}
                        <br />
                        <input className='form-input'{...register("flatOrFloor", { required: true })}

                            placeholder="Enter Flat or Floor Number"

                        />
                        {errors.flatOrFloor && <span className="error">This field is required</span>}
                        <br />
                        <button className='form-submit' type='submit' >
                            Save & Continue
                        </button>


                    </form>

                </div>


                <div className="col-md-4 px-4">
                    <div className="row mb-4">
                        {/* Row for Checkout Information */}
                        <div className="col-12 delivery-info">

                            <h5><span>To:</span> {DeliveryInfo.address}</h5>
                            <h5><span>Road Name:</span> {DeliveryInfo.roadName}</h5>
                            <h5><span>Flat or Floor:</span> {DeliveryInfo.flatOrFloor}</h5>

                        </div>
                    </div>
                    <div className="row">
                        {/* Row for ShowSubProductCost Components */}
                        {data.map((item, index) => (
                            <div className="col-12 mb-3" key={item.id}>
                                <ShowSubProductCost cart={item} />
                            </div>
                        ))}
                    </div>
                    <div className="row mt-4">
                        {/* Row for Total Price */}
                        <div className="summary-info col-12 ">
                            <div className="summary-item">
                                <span className="label">Total Price:</span>
                                <span className="value">${allTotalCost}</span>
                            </div>
                            <div className="summary-item">
                                <span className="label">Tax:</span>
                                <span className="value">$5.00</span>
                            </div>
                            <div className="summary-item">
                                <span className="label">Delivery Fee:</span>
                                <span className="value">$2.00</span>
                            </div>
                            <div className="summary-item">
                                <span className="label">Total:</span>
                                <span className="value">${(allTotalCost + 5 + 2).toFixed(2)}</span>
                            </div>
                            <button
                                className={`toggle-button ${isActive ? 'active' : 'disabled'}`}
                                onClick={()=>handlePlaceOrder()}>Place Order </button>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    );
};

export default CheckOut;