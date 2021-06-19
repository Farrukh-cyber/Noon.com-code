import React, { useState } from 'react';
import Card from './cards';

function Product4() {
    const [product, setProduct] = useState([
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605900910/N36061300A_1.jpg',
            title: 'Apple Mac Book ',
            description: '256 GB',
            price: '4682 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605900915/N13977376A_1.jpg',
            title: 'Life Zed Book II',
            description: '256 GB',
            price: '46 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1612944610/N44278658A_1.jpg',
            title: 'Lenovo Ideapad 3',
            description: '256 GB',
            price: '8 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605171462/N41910685A_1.jpg',
            title: 'Apple Mac Book  ',
            description: 'good quality',
            price: '1999 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1600764010/N40684825A_1.jpg',
            title: 'iLife zed air plus',
            description: '50 inch',
            price: '1999 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1618292510/N46487162A_1.jpg',
            title: 'Asus tof DASH ',
            description: '50 inch',
            price: '1999 AED'
        },
    ])



    return <>
    <h5>Top picks in Laptop</h5>
        <div className='row p-0 m-0'>
            {product.map((e, i) => {
                return <div key={i} className='col-md-2'>
                    <Card imageSrc={e.imageSrc} title={e.title} description={e.description} price={e.price} />
                </div>
            })}

        </div>
    </>
}
export default Product4;