import React from 'react'
import './styles/header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue()

    const handleSignIn = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <header className='header'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <img className='head_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>


            <div className='head_searchBar'>
                <input className='head_searchInput' type="text" />
                <SearchIcon className='head_searchIcon' />
            </div>

            <div className='head_nav'>
                {/* If the page has been signed in, it will just sign out but if if not, only then redirect to login page */}
                <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
                    <div onClick={handleSignIn} className='head_option'>
                        <span className='head_optionLine1'>
                            Hello {user ? user?.email : 'Guest'}
                        </span>
                        <span className='head_optionLine2'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className='head_option'>
                    <span className='head_optionLine1'>
                        Your
                    </span>
                    <span className='head_optionLine2'>
                        Prime
                    </span>
                </div>

                <Link to='/orders' style={{ textDecoration: 'none' }}>
                    <div className='head_option'>
                        <span className='head_optionLine1'>
                            Returns &
                        </span>
                        <span className='head_optionLine2'>
                            Orders
                        </span>
                    </div>
                </Link>


                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                    <div className='head_optionCart'>
                        <ShoppingCartIcon />
                        <span className='head_BasketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>

        </header>
    )
}

export default Header