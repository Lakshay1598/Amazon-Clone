import React from 'react'
import './styles/checkout.css'
import { Link } from 'react-router-dom'
import SubTotal from './SubTotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'


const CheckOut = () => {
    const [{basket , user}, dispatch] = useStateValue();

    return (
        <>
            <Link to='/'>
                <img src='https://m.media-amazon.com/images/I/21HEtJGAJHL.jpg' className='adBanner' />
            </Link>

            <div className='checkout'>
                <div className="checkout_left">
                    <div>
                        <h3>Hey there, {user ? user?.email : 'Guest'}</h3>
                        <h2 className="checkout_title">Your Shopping Cart</h2>
                                {basket.map(item =>(
                                    <CheckoutProduct 
                                        id = {item.id}
                                        title = {item.title}
                                        image = {item.image}
                                        price = {item.price}
                                        rating = {item.rating}

                                    />
                                ))}
                        
                    </div>
                </div>

                <div className="checkout_right">
                    <SubTotal />
                    <h2>Subtotal price</h2>
                </div>


            </div>
        </>

    )
}

export default CheckOut