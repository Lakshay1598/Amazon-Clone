
import './styles/App.css';
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Payment from './Payment';
import CheckOut from './CheckOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';


const promise = loadStripe('pk_test_51MmHeaSEHZcG38HbcLqpAa6tsjfM92znq1xGpTplOk53MAFGhrcaTqxdrSGpvIMTduV0NCrDiFhSYJJoIpbxRQBn00B40J7EDE');





function App() {
  const [{ }, dispatch] = useStateValue()




  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (

    <Router>
      <div className="App">

        <Routes>
          <Route path="/checkout"
            element={[<Header />, <CheckOut />]} />
          <Route path="/"
            element={[<Header />, <Home />]} />
          <Route path="/orders"
            element={[<Header />, <Orders />]} />
          <Route path="/payment"
            element={[<Header />,
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            ]} />
          <Route path='/login' element={[<Login />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
