import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductItem from './Component/Body/ProductItem';
import ProductSearch from './Component/Body/ProductSearch';
import Dropdown from './Component/Head/Dropdown';
import ProductMenu from './Component/Head/ProductMenu';

import './ProductList.scss';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);

  console.log(searchParams.toString());

  useEffect(() => {
    fetch(`http://10.58.52.122:3000/products/?${searchParams.toString()}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setData(result.data));
  }, [searchParams]);

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="product-list-head">
          <div className="product-menu">
            <ProductMenu />
          </div>
          {/* 필터 */}
          <div className="product-filter-box">
            <Dropdown
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </div>

          {/* 회색줄 */}
          <div className="grey-line" />
          {/* 검색결과 */}
          <div className="search-container">
            <ProductSearch total={data.length} />
          </div>
          {/* 아이템 */}
          <div className="item-container">
            <ProductItem data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
