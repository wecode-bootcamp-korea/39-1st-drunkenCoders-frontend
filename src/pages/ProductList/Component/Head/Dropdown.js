import React, { useState } from 'react';
import './Dropdown.scss';

const Dropdown = ({ searchParams, setSearchParams }) => {
  const [openList, setOpenList] = useState(false);

  const toggleHandler = () => {
    setOpenList(!openList);
  };

  const filterParams = (id, name) => {
    searchParams.append(name, id);
    setSearchParams(searchParams);
  };

  return (
    <div className="drop-down-wrapper">
      {filterList.map(filterItem => (
        //필터 버튼
        <button
          key={filterItem.id}
          className={
            openList === filterItem.id ? 'filter-btn active' : 'filter-btn'
          }
          onClick={() => setOpenList(filterItem.id)}
        >
          {filterItem.title}
          <div className="filter-content">
            {filterItem.type.map(type => (
              //내용 버튼 내용 버튼
              <div
                className="filter-item-box"
                key={type.id}
                onClick={() => filterParams(type.id, type.name)}
              >
                <div className="filter-item-wrapper">
                  <div className="filter-item">
                    <button className="filter-item-btn">
                      <p className="filter-item-text">{type.option}</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Dropdown;

const filterList = [
  {
    id: 0,
    title: '주종',
    type: [
      { id: 1, option: '탁주', name: 'cate_id' },
      { id: 2, option: '청주', name: 'cate_id' },
      { id: 3, option: '과실주', name: 'cate_id' },
      { id: 4, option: '증류주', name: 'cate_id' },
    ],
  },
  {
    id: 1,
    title: '단맛',
    type: [
      { id: 1, option: '약', name: 'sweetness' },
      { id: 2, option: '중', name: 'sweetness' },
      { id: 3, option: '강', name: 'sweetness' },
    ],
  },
  {
    id: 2,
    title: '신맛',
    type: [
      { id: 1, option: '약', name: 'sourness' },
      { id: 2, option: '중', name: 'sourness' },
      { id: 3, option: '강', name: 'sourness' },
    ],
  },
  {
    id: 3,
    title: '탄산',
    type: [
      { id: 1, option: '약', name: 'carbon' },
      { id: 2, option: '중', name: 'carbon' },
      { id: 3, option: '강', name: 'carbon' },
    ],
  },
  {
    id: 4,
    title: '과일',
    type: [
      { id: 1, option: '포도', name: 'fruits' },
      { id: 2, option: '배', name: 'fruits' },
      { id: 3, option: '매실', name: 'fruits' },
      { id: 4, option: '사과', name: 'fruits' },
      { id: 5, option: '베리', name: 'fruits' },
    ],
  },
  {
    id: 5,
    title: '꽃',
    type: [
      { id: 1, option: '국화', name: 'flowers' },
      { id: 2, option: '유채', name: 'flowers' },
      { id: 3, option: '동백꽃', name: 'flowers' },
      { id: 4, option: '매화', name: 'flowers' },
      { id: 5, option: '진달래', name: 'flowers' },
    ],
  },
  {
    id: 6,
    title: '곡물',
    type: [
      { id: 1, option: '땅콩', name: 'grains' },
      { id: 2, option: '밤', name: 'grains' },
      { id: 3, option: '사탕수수', name: 'grains' },
      { id: 4, option: '고구마', name: 'grains' },
      { id: 5, option: '보리', name: 'grains' },
    ],
  },
  {
    id: 7,
    title: '도수',
    type: [
      { id: 1, option: '0% ~ 10%' },
      { id: 2, option: '10% ~ 20%' },
      { id: 3, option: '20% ~ 30%' },
      { id: 4, option: '30% ~ 40%' },
    ],
  },
  {
    id: 8,
    title: '가격',
    type: [
      { id: 1, option: '~ 1만원' },
      { id: 2, option: '1만원 ~ 3만원' },
      { id: 3, option: '3만원 ~ 5만원' },
      { id: 4, option: '5만원 ~ 10만원' },
      { id: 5, option: '10만원 이상' },
    ],
  },
];
