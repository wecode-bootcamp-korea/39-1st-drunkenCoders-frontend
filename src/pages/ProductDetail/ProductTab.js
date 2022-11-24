import React, { useState } from 'react';
import './ProductTab.scss';

const ProductTab = () => {
  const [currTabId, setCurrTabId] = useState(0);

  return (
    <section className="tab">
      <div className="tab-menu">
        {Tapdata.map(item => (
          <div className="tabtab">
            <button
              key={item.id}
              className={currTabId === item.id ? 'btn' : 'btn-white'}
              onClick={() => setCurrTabId(item.id)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      <div className="tab-content">
        <img src={Tapdata.find(({ id }) => currTabId === id).src} />
      </div>
    </section>
  );
};

export default ProductTab;

const Tapdata = [
  {
    id: 0,
    title: '상품정보',
    src: '/images/kunwooSample/productInfo.png',
  },
  {
    id: 1,
    title: '교환/반품',
    src: '/images/kunwooSample/change.png',
  },
];
