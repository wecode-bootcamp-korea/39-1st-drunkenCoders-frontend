import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Rightside from './Rightside';
import Leftside from './Leftside';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState({});
  useEffect(() => {
    fetch(`http://10.58.52.122:3000/products/${productId}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setProductData(data.data[0]));
  }, []);

  if (Object.keys(productData).length === 0) return null;
  return (
    <div className="container">
      <div className="detail-main">
        <Leftside productData={productData} />

        <Rightside productData={productData} />
      </div>
    </div>
  );
};

export default ProductDetail;
