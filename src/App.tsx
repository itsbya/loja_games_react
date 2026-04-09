
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./componets/footer/Footer";
import Navbar from "./componets/navbar/NavBar";
import ListarCategoria from "./componets/categoria/listarcategoria/ListarCategoria";
import DeletarCategoria from "./componets/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./componets/categoria/formcategoria/FormCategoria";




function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div className="min-h-[80vh] bg-linear-to-r from-slate-900 via-slate-800 to-slate-900">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListarCategoria />} />
             <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;