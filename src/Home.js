import React from 'react';
import './styles/home.css';
import Product from './Product';


const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img src="https://m.media-amazon.com/images/I/91pzohpvYIL._SX3000_.jpg" className='imgBg' />


                <div className='home_row'>
                    <Product id="1234" title='Atomic Habits' image='https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg'
                        price={459.00} rating={5} />
                    <Product id="3124" title='Fujitsu CH Intel Evo Core i5 11th Gen 13.3” FHD IGZO Panel 400Nits Thin & Light Laptop(16GB/512GB SSD/Windows 11/Office 2021/Iris Xe Graphics/Backlit/2Yr Warranty/Brown/988gm),4ZR1H03553'
                     image='https://m.media-amazon.com/images/I/81HmU0UvXZL._SX679_.jpg'
                        price={54669.00} rating={4} />

                </div>
                <div className='home_row'>
                    <Product id="8434" title='Captivate: The Science of Succeeding with People (Portfolio Non Fiction) [Paperback]' image='https://m.media-amazon.com/images/I/51q+bqUX3FL._SX324_BO1,204,203,200_.jpg'
                        price={408.00} rating={4} />
                    <Product id="5566" title='JBL Tune 760NC, Wireless Over Ear Active Noise Cancellation Headphones, Pure Bass (Black)'
                     image='https://m.media-amazon.com/images/I/61HXCeozUjL._SX679_.jpg'
                        price={5438.00} rating={5} />
                    <Product id="7567" title='That Night: Four Friends, Twenty Years' image='https://m.media-amazon.com/images/I/41kRkqIt6aL._SX322_BO1,204,203,200_.jpg'
                        price={408.00} rating={4} />
                    <Product id="1577" title='Ide Famewear Men Full rim Polarized Sunglasses ' image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/414xiPNbVsL._UX679_.jpg'
                        price={2086.00} rating={3} />
                </div>
                <div className='home_row'>
                <Product id="9907" title='ES ESPINHO Maddison Solid Sal Wood Fabric Upholstered 3 Seater Right Hand Side Facing Modular, Sectional, Corner L Shape Sofa Set for Living Room, Teal Color'
                     image='https://m.media-amazon.com/images/I/51cf92qyyAS._SY300_SX300_.jpg'
                        price={40708.00} rating={5} />

                </div>
            </div>

        </div>
    )
}

export default Home