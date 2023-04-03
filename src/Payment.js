import React, { useEffect , useState} from 'react'
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './styles/payment.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer' 
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from './axios';
import { db } from './firebase';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate()

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        //Generates the Stripe secret
         
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url : `/payments/create?total=${getBasketTotal(basket) *100}`

            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()
    } , [basket])



    console.log("The client secret is   " , clientSecret)

    

    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card : elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //Payment Intent == Payment confirmation

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount : paymentIntent.amount,
                created : paymentIntent.created
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'Empty_Basket'
            })
        
            navigate('/orders', { replace: true });
        })
    }

    const handleChange = event => {
        setDisabled(event.empty)  
        setError(event.error ? event.error.message : "")
    }


    return (
        <div className="payment">
            <h1>Checkout(<Link to='/'>{basket?.length} items
            </Link>)</h1>
            <div className="payment_container">

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>G50, Gamma -3</p>
                        <p>Greater Noida</p>
                    </div>
                </div>


                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.tiltle}
                                price={item.price}
                                rating={item.rating}
                                image={item.image} />
                        ))}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={
                                        (value) => (
                                            <>
                                               <h3>
                                                Order Total : {value}
                                               </h3>
                                            </>
                                        )
                                    }  
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} 
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}

                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>

                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment