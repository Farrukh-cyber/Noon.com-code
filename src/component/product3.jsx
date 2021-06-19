import React, { useState } from 'react';
import Card from './cards';

function Product3() {
    const [product, setProduct] = useState([
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1587900999/N29099389A_1.jpg',
            title: 'Niya Hawaiian Musk 100ml',
            description: '256 GB',
            price: '4682 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1593341909/N22879414A_1.jpg',
            title: 'Niya Pack 27 SheetMask',
            description: '256 GB',
            price: '46 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1587976353/N37554193A_3.jpg',
            title: 'Endura Tempered Glass New',
            description: '256 GB',
            price: '8 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1622612005/N42308831A_1.jpg',
            title: 'Niya facial serum Acid',
            description: 'good quality',
            price: '1999 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1583837534/N29905110A_1.jpg',
            title: 'Quwa leather Oud niya',
            description: '50 inch',
            price: '1999 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1575872997/N29099392A_1.jpg',
            title: 'Quwa 3 piece bath',
            description: '50 inch',
            price: '1999 AED'
        },
    ])



    return <>
        <div className='row p-0 m-0'>
            <h5 className="p-2 week">Weekend special - buy 1 get 1 free</h5>
            {product.map((e, i) => {
                return <div key={i} className='col-md-2'>
                    <Card imageSrc={e.imageSrc} title={e.title} description={e.description} price={e.price} />
                </div>
            })}

        </div>
    </>
}
export default Product3;