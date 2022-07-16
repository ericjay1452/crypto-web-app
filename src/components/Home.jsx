import React from 'react'
import millify from 'millify'
import { Typography, Row, Statistic,Col } from 'antd'
import { Link } from 'react-router-dom'
import {News, Cryptocurrencies } from "../components"
import {useGetCryptosQuery } from "../Api/CryptoApi"
import "../index.css"

const Home = () => {
  const {Title, Paragraph} = Typography

  // Passing parameter to useGetCryptosQuery for top 20 cryptos
  const {data, isFetching } = useGetCryptosQuery(20);
  const GlobalStats  = data?.data?.stats;

  if(isFetching) {
    return (
      <h4>Loading Data ....</h4>
    )
  }
  
  const {total,total24hVolume, totalCoins,totalExchanges, totalMarketCap, totalMarkets} = GlobalStats

  return (
    <div className='w-full relative h-full bottomMag'>
      <Title level={2} className="p-2 font-bold">Global Crypto Stats</Title>

      {/* Underline div */}
      <div className='block w-2/12 h-1 bg-gray-900 mb-3 ml-2 rounded'></div> 

      <Row className = "text-center p-6 mb-2 bg-gray-400">
        <Col span = {12} className="p-2 mb-4 font-thin cursor-pointer effectHover hover:transition-all hover:rounded">
          <Statistic value={millify(total)} title = "Total CryptoCurrencies" />
        </Col>

        <Col span = {12} className="p-2 mb-4 font-thin cursor-pointer effectHover hover:transition-all hover:rounded">
          <Statistic value={millify (totalExchanges)} title = "Total Exchange" />
        </Col>

        <Col span = {12} className="p-2 mb-4 font-thin cursor-pointer effectHover hover:transition-all hover:rounded">
          <Statistic value={millify (totalMarketCap)} title = "Total Market Cap" />
        </Col>

        <Col span = {12} className="p-2 mb-4 font-thin cursor-pointer effectHover hover:transition-all hover:rounded">
          <Statistic value={millify(total24hVolume)} title = "Total 24h Volume" />
        </Col>

        <Col span = {12} className="p-2 mb-4 font-thin cursor-pointer effectHover hover:transition-all hover:rounded">
          <Statistic value={millify(totalMarkets)} title = "Total Market" />
        </Col>

        <Col span = {12} className="p-2 mb-4 font-thin cursor-pointer effectHover hover:transition-all hover:rounded">
          <Statistic value={millify(totalCoins)} title = "Total CryptoCurrencies" />
        </Col>
      </Row>
       
       <div className='relative w-full block h-full'>

               <div className='flex justify-between items-center'>
                <Title level = {2} className= "py-4 px-2">
                Top 20 Crytops in The Market
                </Title>
                  
                  <Paragraph>
                    <Link to = "/cryptocurrencies" className='mr-2 text-black'>Show More</Link>
                  </Paragraph>
               </div>

               <Cryptocurrencies simplified/>


               <div className='flex justify-between items-center'>
                <Title level = {2} className= "py-4 px-2">
                Latest Cryptos News
                </Title>
                  
                  <Paragraph>
                    <Link to = "/news" className='mr-2 text-black'>Show More</Link>
                  </Paragraph>
               </div>
              <News simplified/>
             </div>

    </div>
  )
}

export default Home