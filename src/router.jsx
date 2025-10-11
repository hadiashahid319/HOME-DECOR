import { createBrowserRouter } from "react-router-dom";
import Landing from "./Landing";

import Login from "./Login";
import RegistrationPage from "./Registrationpage";
import CandlesGallery from "./CandlesGallery";
import MirrorsGallery from "./MirrorsGallery";
import FramesGallery from "./FramesGallery";
import VasesGallery from "./VasesGallery";

const router = createBrowserRouter([
    { path: "/" , element:  <Landing /> },
     { path: "/registrationpage" , element:  <RegistrationPage /> },
     { path: "/candlesgallery" , element:  <CandlesGallery/> },
     { path: "/mirrorsgallery" , element:  <MirrorsGallery /> },
      { path: "/framesgallery" , element:  <FramesGallery /> },
         { path: "/vasesgallery" , element:  <VasesGallery /> },
    { path: "/login" , element: <Login /> }
]);

export default router;