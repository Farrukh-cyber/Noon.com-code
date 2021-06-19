import React from 'react';
import Imge from '../image/fir.jpg';
import Imge2 from '../image/serum.jpg';
let Offer = () => {
    return (
        <div className="">
            <div className="pad">

                <img src={Imge} alt="img" width="46%" className=" mar" />
                <img src={Imge2} alt="img" width="46%" className="p-1" />
            </div>
            <img src="https://k.nooncdn.com/cms/pages/20210618/7f1b7247f10329cba8312628d5fb8d63/en_PLP-01.png" width="100%" alt="" />
        </div>
    )
}
export default Offer;