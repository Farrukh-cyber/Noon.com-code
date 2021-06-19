import React, { useState } from 'react';
import Card from './cards';

function Product5() {
    const [product, setProduct] = useState([
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1615292698/N42664681A_1.jpg',
            title: 'Royal ford 10 piece',
            description: '256 GB',
            price: '4682 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1615292705/N42664697A_4.jpg',
            title: 'TD home 4 piece steel',
            description: '256 GB',
            price: '46 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1612440228/N22547721A_5.jpg',
            title: 'Esonmus stainless steal',
            description: '256 GB',
            price: '8 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1606407153/N16173748A_1.jpg',
            title: 'Noon east Bamboo bed',
            description: 'good quality',
            price: '1999 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1539782774/N18675482A_1.jpg',
            title: 'Amal cake decorating',
            description: '50 inch',
            price: '1999 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1603194822/N19145189A_1.jpg',
            title: 'Royal Ford 10 piece',
            description: '50 inch',
            price: '1999 AED'
        },
    ])



    return <>
    <h4>Top picks home and kitchen</h4>
        <div className='row p-0 m-0'>
            {product.map((e, i) => {
                return <div key={i} className='col-md-2'>
                    <Card imageSrc={e.imageSrc} title={e.title} description={e.description} price={e.price} />
                </div>
            })}

        </div>
    </>
}
export default Product5;