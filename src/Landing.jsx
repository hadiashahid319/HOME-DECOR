
import GallerySection from "./GallerySection";
import InstagramSection from "./InstagramSection";
import View from "./View";
import Footer from "./Footer";
import About from "./Banner";
import MostSaledItem from "./MostSaledItem";
import Banner from "./Banner";
import Navbar from "./Bar";
import ProductDetails from "./Productdetails";
import RegistrationPage from "./Registrationpage";
import Login from "./Login";

function Landing()
{ 
    return(
<>
<div className="container-fluid">
    <RegistrationPage/>
 {/* <Navbar/>
<Banner/>
<GallerySection/>
<View/>
<MostSaledItem/>
<Footer/> */}
</div>
</>
    
    
    )
}
export default Landing;