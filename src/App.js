import React from "react"
import {Routes, Route} from "react-router-dom"
import {Navbar, Home, History, CryptoDetail, Cryptocurrencies, News} from "./components";


function App() {
  return (
           <>
              <Navbar />
           <Routes>
             <Route path = "/" element = {<Home />} />
             <Route path = "cryptodetail/:id/history" element = {<History />} />
             <Route path = "cryptocurrencies" element = {<Cryptocurrencies />} />
             <Route path = "cryptodetail/:id" element = {<CryptoDetail />} />
             <Route path = "news" element = {<News />} />  
          </Routes>
          </>
    );
}

export default App;
