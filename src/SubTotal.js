import React from 'react'
import './styles/subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useNavigate } from 'react-router-dom'

const SubTotal = () => {
    const navigate = useNavigate()
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={
                    (value) => (
                        <>
                            <p>
                                Subtotal ({basket.length} items) :
                                <strong>
                                    {value}
                                </strong>
                            </p>
                            <small className='subtotal_gift'>
                                <input type="checkbox" />   This order has gifts
                            </small>
                        </>
                    )
                }
                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {'text'}
                thousandSeparator = {true}
                prefix = {'₹ '}

            />
            <button onClick={e => navigate('/payment' , {replace : true})}>Proceed to CheckOut</button>

        </div>
    )
}

export default SubTotal