import { Container } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";
import Soc from "./Soc";
import Policy from "./Policy";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import ProductDetails from "./ProductDetails";

function Layout(){
    return(
        <div>
            <Header/>
            <Container maxWidth={'xxl'}>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/soc" element={<Soc/>}></Route>
                    <Route path="/policy" element={<Policy/>}></Route>
                    <Route path="/Counter" element={<Counter/>}></Route>
                    <Route path="/ProductDetails" element={<ProductDetails/>}></Route>
                    
                </Routes>
            </Container>
            <Footer/>
        </div>
    )
}

export default Layout;