import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'
import { Card, Row,Col, Input } from 'antd'
import { useGetCryptosQuery } from '../Api/CryptoApi'
import defaultImg from "../constant/Logo.png"
import "../index.css"


const Cryptocurrencies = ({simplified}) => {
  //  For getting the top 20 crypto currency in marget
  const count = simplified ? 20 : 100;

  const {data:cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
   const [keyWord, setKeyWord]  = useState("");
  //  const [check, setCheck] = useState = (true)

   useEffect( ()=>{
  
    const filteredTerms = cryptoList?.data?.coins.filter((coin) =>coin.name.toLowerCase().includes(keyWord.toLowerCase()));
    setCryptos(filteredTerms )
    // setCheck(false)
   }, [cryptoList, keyWord])

  if(isFetching) return <h2>Loading ...</h2>

  return (
          <>
          {/* Only display this input on cryptocurrencies component as long as simplified id false */}
          {!simplified && (
          <div className = "relative w-full">
              <div className='w-6/12 mx-auto my-8'>
              <Input placeholder='Search Crypto' 
              onChange={(e)=>setKeyWord(e.target.value)}
              value = {keyWord}
              />
              </div>
              {/* <p className = "text-center">{check ? `` : ``}</p>  */}
          </div>
           )}
    <div className='relative w-full block'>
      <Row className='justify-evenly items-center'>
        {
          cryptos?.map( (currency) =>{
            const {uuid, rank, name, iconUrl, price, marketCap, change} = currency;
               return (
            <Col  xs = {24} sm={12} lg = {4}  key={uuid} className = "m-1">
              <Link to = {`/cryptodetail/${uuid}`}>
                <Card className= "hover:transition-all hover:bg-gray-400 rounded-3xl"
                extra = {<img src = {`${iconUrl}` || `${defaultImg}`} alt = {`${name}`} id = "img2" className ="max-w-full w-full"/> }
                title = {`${rank} . ${name}`}
                hoverable
                >
                  <p> Price : {millify (price) }</p>
                  <p> Market Cap : {millify (marketCap) }</p>
                  <p> Daily Change : {millify (change) } %</p>
                </Card>
              </Link>
            </Col>
            )
          })
        }
        </Row>
    </div>
    </>
    )
}

export default Cryptocurrencies