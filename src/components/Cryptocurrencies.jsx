import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'
import { Card, Row,Col, Input, Typography } from 'antd'
import { useGetCryptosQuery } from '../Api/CryptoApi'
import defaultImg from "../constant/Logo.png"
import "../index.css"


const Cryptocurrencies = ({simplified}) => {

  const {Paragraph} = Typography
  //  For getting the top 20 crypto currency in marget
  const count = simplified ? 20 : 100;

  const {data:cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
   const [keyWord, setKeyWord]  = useState("");

   useEffect( ()=>{
  
    const filteredTerms = cryptoList?.data?.coins.filter((coin) =>coin.name.toLowerCase().includes(keyWord.toLowerCase()));
    setCryptos(filteredTerms )
   }, [cryptoList, keyWord])

  if(isFetching) return <h2>Loading ...</h2>

  return (
          <>
          {/* Only display this input on cryptocurrencies component as long as simplified is false */}
          {!simplified && (
             <div className = "relative w-full">
              <div className='w-6/12 mx-auto my-8'>
              <Input placeholder='Search Crypto' 
              onChange={(e)=>setKeyWord(e.target.value)}
              value = {keyWord}
              />
              </div>
          </div>
           )}
           
    <div className='relative w-full block effect py-4'>
      <Row className='justify-evenly items-center'>
        {
          cryptos?.map( (currency) =>{
            const {uuid, rank, name, iconUrl, price, marketCap, change} = currency;
            
               return (
            <Col  xs = {24} sm={6} lg = {5}  key={uuid} className = "m-1 effectHover2">
              <Link to = {`/cryptodetail/${uuid}`} className = "effectHover">
                <Card className= "hover:transition-all rounded-3xl"
                extra = {<img src = {`${iconUrl}` || `${defaultImg}`} alt = {`${name}`} id = "img2" className ="max-w-full w-full"/> }
                title = {`${rank} . ${name}`}
                hoverable
                >
                  <Paragraph className = "text-center text-xl">{name}</Paragraph>
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