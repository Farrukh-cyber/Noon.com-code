import React, { useState } from 'react';
import Card from './cards';

function Product2() {
    const [product, setProduct] = useState([
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung 50 inch Led',
            description: '256 GB',
            price: '4682 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1603870447/N41442670A_1.jpg',
            title: 'oculus quist 2 advance',
            description: '256 GB',
            price: '46 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1618292510/N46487162A_1.jpg',
            title: 'Asus Tof laptop',
            description: '256 GB',
            price: '8 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1537004783/N17076595A_1.jpg',
            title: 'Hp 27 inch monitor ',
            description: 'good quality',
            price: '1999 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1615355292/N45047130A_1.jpg',
            title: 'Chrome book laptop',
            description: '50 inch',
            price: '1999 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1611138575/N42284105A_1.jpg',
            title: 'Apple mac book air',
            description: '50 inch',
            price: '1999 AED'
        },
    ])



    return <>
    <h5 className="marg">Trending Deals</h5>
        <div className='row p-0 m-0'>
            {product.map((e, i) => {
                return <div key={i} className='col-md-2'>
                    <Card imageSrc={e.imageSrc} title={e.title} description={e.description} price={e.price} />
                </div>
            })}

        </div>
    </>
}
export default Product2;