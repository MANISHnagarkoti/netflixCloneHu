import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moviedetail from "./pages/Moviedetail";
import Header from "./component/Header";
import Genredetail from "./pages/Genredetail";
import Tvdetail from "./pages/Tvdetail";
import Footer from "./component/Footer";
import GlobalStyle from "./Globlestyle"



function App() {
  return (
    <div >


<GlobalStyle />


      <BrowserRouter>




        <Header />


        <Routes>
          <Route >
            <Route path="/" element={<Home />} />
            <Route path="/:movie_id" element={<Moviedetail />} />
            <Route path="/genre" element={<Genredetail />} />
            <Route path="/tv/:tv_id" element={<Tvdetail />} />

          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}




export default App;
