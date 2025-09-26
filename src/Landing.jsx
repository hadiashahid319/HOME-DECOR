import NavBar from "./NavBar";
import GallerySection from "./GallerySection";
import InstagramSection from "./InstagramSection";
import View from "./View";
import Footer from "./Footer";
import About from "./Banner";
import MostSaledItem from "./MostSaledItem";
import Banner from "./Banner";
function Landing()
{ 
    return(
<>
<div className="container-fluid" >
    <NavBar/>
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