import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from "./pages/AppLayout";
import CityList from './components/CityList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />} >
        
        <Route index elememt={<CityList/>}/>
        <Route path="cities" element={<p>List of cities</p>} />
        {/*doesnt really need to be a component it can be any jsx component*/ }
        
        <Route path="countries" element={<p>List of countries</p>} />
        
        <Route path="form" element={<p>Form</p>} />
            </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes >
    </BrowserRouter >
  );
}
export default App;