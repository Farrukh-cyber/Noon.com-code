import './App.css';
import Nav from './Header';
import Carosel  from "./component/Carousel";
import Product from './component/product';
import Img from './component/image1';
import Offer from './component/offer';
import Mega from './component/megadeal';
import Imag2 from './component/image2';
import Product2 from './component/product2';
import Crosel from './component/carousel2';
import Product3 from './component/product3';
import Exclusive from './component/exculusive';
import Product4 from './component/product4';
import Gif from './component/gif';
import Imag3 from './component/image3';
import Product5 from './component/product5';
import Footer from './component/footer';


function App() {
  return (
    <div>
      <Nav />
      <Carosel />
      <Img/>
      <h4 className='p-2'>Recomended for you</h4>
      <Product/>
      <Offer/>
      <Mega/>
      <Imag2/>
      <Product2/>
      <Crosel/>
      <Product3/>
      <Exclusive/>
      <Product4/>
      <Gif/>
      <Imag3/>
      <Product5/>
      <Footer/>
    </div>
  );
}

export default App;
