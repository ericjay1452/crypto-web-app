import {Link, Routes, Route} from "react-router-dom"
import {Layout, Typography} from "antd"
import {Navbar, Home, Exchange, CryptoDetail, Cryptocurrencies, News} from "./components";


function App() {

  const { Paragraph } = Typography;
  return (<>
    <div className="flex">

     <div className = "nav-bar relative block bg-slate-900 w-[15%]">
      <div className="block relative h-screen">
        <div className="sticky top-0 bottom-0">
      <Navbar />
      </div>
      </div>
     </div>
     {/* Close of navBar */}
  
  <div className = "main w-full">
       <Layout>
        <div className="routes">
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "exchange" element = {<Exchange />} />
             <Route path = "cryptocurrencies" element = {<Cryptocurrencies />} />
            <Route path = "cryptodetail/:id" element = {<CryptoDetail />} />
            <Route path = "news" element = {<News />} />  
          </Routes>
        </div>
       </Layout>


       <footer className = "bg-slate-900 w-full  fixed bottom-0">
     <Paragraph className="text-center text-white p-2 white">
      All rights reserved created by Ilesanmi Erioluwa Victor
     </Paragraph>

     <div className="text-center flex justify-center items-center">
      <Link to = "/" className="px-4 pb-2" target={"_self"}>Home</Link>
      <Link to = "/exchange" className="px-4 pb-2" target={"_blank"}>Exchange</Link>
      <Link to = "news" className="px-4 pb-2">News</Link>
    </div>
    </footer>
    {/* Footer */}

  </div>

  
    </div>
    </>);
}

export default App;
