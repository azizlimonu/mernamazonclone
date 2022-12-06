import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      break;
  }
};

const ProductScreen = () => {
  const params = useParams();
  // console.log(params);
  const { slug } = params;

  const initialState = {
    products: [],
    loading: false,
    error: '',
  }
  const [state, dispatch] = useReducer(logger(reducer), initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get(`http://localhost:5000/api/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    }
    fetchData();
  }, [slug]);

  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  )
}

export default ProductScreen