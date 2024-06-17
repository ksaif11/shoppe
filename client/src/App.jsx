import styled,{ThemeProvider} from 'styled-components'
import { lightTheme } from './utils/Themes'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import {useState} from 'react'
import ShopListing from './pages/ShopListing';
import Favourite from './pages/Favourite';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import { useDispatch, useSelector } from "react-redux";
import Contact from './pages/Contact';
import Footer from './components/Footer';
const Container=styled.div`
 display:flex;
 flex-direction:column;
 background:${({theme})=>theme.bg};
 color:${({theme})=>theme.text_primar};
 overflow-x:hidden;
 overflow-y:hidden;
 transition:all 0.2s ease;
`;

function App() {
 
  const { currentUser } = useSelector((state) => state.user);
  const { open, message, severity } = useSelector((state) => state.user);
  const [openAuth,setOpenAuth]=useState(false)
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
         <Navbar openAuth={openAuth}  setOpenAuth={setOpenAuth} currentUser={currentUser} />
         <Routes>
           <Route path='/' element={ <Home />} />
           <Route path='/shop' element={ <ShopListing />} />
           <Route path='/favorite' element={ <Favourite />} />
           <Route path='/cart' element={ <Cart />} />
           <Route path='/shop/:id' element={ <ProductDetails />} />
           <Route path='/contact' element={ <Contact />} />

         </Routes>
         {openAuth && <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} />}

         
        </Container>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  )
}

export default App
