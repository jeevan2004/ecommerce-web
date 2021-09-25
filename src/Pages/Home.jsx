
import Slick from '../components/Slider/Slick';
import Promo from '../components/Promo/Promo'
import Trending from '../components/Trending/Trending';
import Collection from '../components/Collection/Collection';
import Seller from '../components/Seller/Seller';
import Blog from '../components/Blog/Blog';
import Service from '../components/Services/Service';



const Home = () => {
  
    return (
        <>
        <Slick/>
        <Promo/>
        <Trending/>
        <Collection/>
        <Seller/>
        <Blog/>
        <Service/>
        </>
    )
}

export default Home
