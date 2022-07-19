import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser';
import { Select, Typography } from 'antd';
import { 
  MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, 
ExclamationCircleOutlined, StopOutlined, 
TrophyOutlined, CheckOutlined, NumberOutlined, 
ThunderboltOutlined } from '@ant-design/icons'


import LineChart from './LineChart';
import millify from 'millify';

import "../index.css"

// Api for getting crytop ID
import { useGetCryptoIdQuery, 
  // useGetCryptoHistoryQuery 
} from '../Api/CryptoApi';
const {Option } = Select;
const CryptoDetail = () => {

  const {Title, Paragraph} = Typography
    const {id } = useParams();
    const [timePeriod, settimePeriod ] = useState ("7d")
    const {data : singleCrypto, isFetching } = useGetCryptoIdQuery(id);
    // const {data : coinHistory} = useGetCryptoHistoryQuery({id,timePeriod})
    
    const cryptoDetails = singleCrypto?.data?.coin;
    console.log(cryptoDetails)
    
    if(isFetching) return <h3>lOADING</h3>

    const {name, price, rank, description,
      numberOfExchanges, numberOfMarkets,
      symbol, marketCap, allTimeHigh,
       supply,links } = cryptoDetails;

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${price && millify(price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: rank, icon: <NumberOutlined /> },
    { title: 'Number of Markets', value: `$ ${numberOfMarkets && millify(numberOfMarkets)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${marketCap && millify(marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${allTimeHigh?.price && millify(allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${supply?.total && millify(supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${supply?.circulating && millify(supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  return (
     <main className='block w-full-relative mt-4'>
      <section className = "text-center font-semibold text-2xl">
        <Title className  ="p-2">{name.toUpperCase()} ({symbol}) Price </Title>
      </section>

      <section className = "block font-thin">
         <Paragraph className = "text-center p-1">
          {name} live price in Us Dollars.
         View value Statistics, Market cap and Supply ..
         </Paragraph>
      </section>

      <div className='w-[90%] block relative mx-auto text-center my-2 p-2'>
        <Select
        defaultValue={"7d"}
        className = "w-[30em]"
        placeholder = "Select time duration"
        onChange={(value) =>settimePeriod(value)}
        >
          {time?.map( (time, i) =>{
            return(<Option key = {i} >{time}</Option>)
          })}
        </Select>
      </div>

      {/* Todo Chart, experiencing some weird bugs  in LineChart component*/}
        
      {/* <LineChart coinHistory={coinHistory} currentPrice={millify(price)} coinName={name} /> */}
         {/*  */}
      <section className='w-full max-w-full relative flex flex-col lg:flex-row '>
           <div className='block p-2 mt-2 w-full relative'>
             <div className='w-[90%] m-auto p-2 block mt-3 text-center'>
                <Title className='font-semibold' level = {2}>  Market Stats for {name} </Title>
                <Paragraph className = "font-thin">This is general overview of {name } values in the Crypto Market</Paragraph>
             </div>

             {/* Stats mapping */}
             <div className='w-full block effect rounded'>
             {
              stats?.map( (stat, index) =>{
                const {title, icon, value } = stat;
                return (
                  <section key = {index} className = "w-full block p-4 effect">
                    <div className = "w-full flex justify-between items-center">
                      <div className = "flex justify-between items-center">
                        <Paragraph className='ml-2'> {icon}</Paragraph>
                        <Paragraph className = "pt-2 ml-2">{title}</Paragraph>
                      </div>
                      <Paragraph className = "mr-2">{value}</Paragraph>
                    </div>

                  </section>
                )
              })
             }
             </div>

           </div>

           {/* General Crypto Overview */}

           <div className='block p-2 mt-2 w-full relative'>
             <div className='w-[90%] m-auto p-2 block mt-3 text-center'>
                <Title className='font-semibold' level = {2}>Other Cryptos Market Stats </Title>
                <Paragraph className = "font-thin">This is general overview of other Cryptos values in the Crypto Market</Paragraph>
             </div>

              {/* GenericStats mapping */}
              <div className='w-full block effect rounded'>
             {
              genericStats?.map( (stat, index) =>{
                const {title, icon, value } = stat;
                return (
                  <section key = {index} className = "w-full block p-4 effect">
                    <div className = "w-full flex justify-between items-center">
                      <div className = "flex justify-between items-center">
                        <Paragraph className='ml-2'> {icon}</Paragraph>
                        <Paragraph className = "pt-2 ml-2">{title}</Paragraph>
                      </div>
                      <Paragraph className = "mr-2">{value}</Paragraph>
                    </div>
                  </section>
                )
              })
             }
             </div>
           </div>
      </section>

         {/* Introduction to CryptoName */}

         <section className='w-full block h-full p-2'>
            <div className='w-[90%] mx-auto mt-2'>
               <Title className='text-center' level = {3}>
                 What is {name}
                 
                 </Title>

                 <Paragraph>
                 {HTMLReactParser(description)}
                 </Paragraph>
            </div>

            <footer className='w-full block p-3 mt-4'>
                 <Paragraph>Here are some helpful resources to learn more about {name}</Paragraph>

                 <section className = "flex flex-wrap">
                  {links?.map( (link, i)=>{
                    const {name, type, url} = link;
                    return (
                      <ul  key={i}>
                        <li className = "flex justify-between items-center px-2">
                          <a href = {url} target = "_blank" rel = "noreferrer" className='block'> {name} </a>
                          <span className='block'>{` (${type})`}</span>
                        </li>

                      </ul>
                    )
                  })}
                 </section>
            </footer>
         </section>

     </main>
  )
}

export default CryptoDetail