import React from 'react'
import './styles/checkoutproduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ id, title, price, rating, image, hideButton }) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = ()=>{
        dispatch({
            type : "Remove_From_Basket", 
            id : id,
        })
    } 

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutP_img" />

            <div className="checkoutP_info">
                <p className="checkoutP_title">{title}</p>
                <p className="checkoutP_price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutP_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && 
                (
                    <button onClick={removeFromBasket} >Remove from Basket</button>
                )}
                
            </div>

        </div>
    )
}

export default CheckoutProduct