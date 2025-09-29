
import GallerySection from "./GallerySection";
import InstagramSection from "./InstagramSection";
import View from "./View";
import Footer from "./Footer";
import About from "./Banner";
import MostSaledItem from "./MostSaledItem";
import Banner from "./Banner";
import Navbar from "./Bar";
function Landing()
{ 
    return(
<>
<div className="container-fluid">
    <Navbar/>
<Banner/>

<GallerySection/>
<View/>
<MostSaledItem/>
<Footer/>
</div>



</>
    
    
    )
}
export default Landing;