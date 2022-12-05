import React from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {
  const params = useParams();
  // console.log(params);

  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  )
}

export default ProductScreen