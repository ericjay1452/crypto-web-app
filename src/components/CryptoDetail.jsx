import React from 'react'
import { useParams } from 'react-router-dom'

const CryptoDetail = () => {
    const detail = useParams();
  return (
    <div>{`CryptoDetail ${detail.id}`}</div>
  )
}

export default CryptoDetail