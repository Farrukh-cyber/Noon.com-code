import React from 'react';
import Image from '../image/one.jpg';
import Image2 from '../image/two.jpg';
import Image3 from '../image/three.jpg';
import Image4 from '../image/four.jpg';
import Image5 from '../image/five.jpg';
import Image6 from '../image/six.jpg';
import Image7 from '../image/seven.jpg';
import Image8 from '../image/eight.jpg';
import Image9 from '../image/nine.jpg';
function Img() {
    return (
        <div className="p-1">
            <img src={Image} alt="img" width="120px"  className="p-2"/>
            <img src={Image2} alt="img" width="120px" className="p-2"/>
            <img src={Image3} alt="img" width="120px" className="p-2"/>
            <img src={Image4} alt="img" width="120px" className="p-2"/>
            <img src={Image5} alt="img" width="120px" className="p-2"/>
            <img src={Image6} alt="img" width="120px" className="p-2"/>
            <img src={Image9} alt="img" width="120px" className="p-2"/>
            <img src={Image2} alt="img" width="120px" className="p-2"/>
            <img src={Image3} alt="img" width="120px" className="p-2"/>
            <img src={Image7} alt="img" width="120px" className="p-2"/>
            <img src={Image8} alt="img" width="120px" className="p-2"/>


        </div>

    );
}
export default Img;