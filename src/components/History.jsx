import React from 'react'
// import { useParams } from 'react-router-dom'
// import {Collapse, Row, Typography} from "antd"
// import millify from 'millify'
// import HTMLReactParser from 'html-react-parser'

import {useGetCryptoExchangesQuery} from "../Api/CryptoApi"

const History = () => {
  // const{id} = useParams()
  const {data, isFetching} = useGetCryptoExchangesQuery();
  if(isFetching ) return <h2>HEOO</h2>


  console.log({data})
  return (
    <div className='relative w-full max-w-full h-full'>
      <div className = "block ">
        {/* {response?.map( (response) =>{
         const {price, iconUrl} = response
         return(
          <Typography.Text className='p-2 text-white bg-white'> $ {millify(price) }</Typography.Text>
         )
        })}
         */}
      </div>
    </div>
  )
}

export default History