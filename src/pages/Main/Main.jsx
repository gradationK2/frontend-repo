import React, { useState } from "react";

import Open from "../../assets/main/Forward.svg";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/MainStyle";
import Header from "./Header";
import FoodList from "./FoodList";

function Main() {
  const [cateList, setCateList] = useState([
    '즉석•간편식품',
    '소스 및 양념류', '김치 및 절임류', '스낵 및 과자류', '냉동식품', '음료 및 주류', '쌀 및 곡류 제품', '육 및 해 가공식품'
  ]);
  const [selectCate, setSelectCate] = useState(0);
  const [recent, setRecent] = useState(false); 
  const [isCategoryVisible, setIsCategoryVisible] = useState(false); 
  const [isSortVisible, setIsSortVisible] = useState(false); 


  const handleCategorySelect = (index) => {
    setSelectCate(index); 
    setIsCategoryVisible(false);  
  };

  const handleSortSelect = (sortType) => {
    setRecent(sortType === '최신순');  
    setIsSortVisible(false);  
  };

  return (
    <C.Common>
      <A.Main>
       <Header className="border"/>
        <A.Header  className="border"
        style={{ justifyContent: 'space-between', padding: '0 20px' }}>
          <A.SortBar
            onClick={() => setIsCategoryVisible(!isCategoryVisible)}
            className={isCategoryVisible ? 'active' : ''}
          >
            {cateList[selectCate]}
            <img src={Open} alt="" />
          </A.SortBar>
          <A.Sortlist className={isCategoryVisible ? 'visible left' : 'left'}>
            {cateList.map((category, index) => (
              <A.Sortitem key={index} onClick={() => handleCategorySelect(index)}>
                {category}
              </A.Sortitem>
            ))}
          </A.Sortlist>
          <A.SortBar
            onClick={() => setIsSortVisible(!isSortVisible)}
            className={isSortVisible ? 'active' : ''}
          >
            {recent ? '최신순' : '인기순'}
            <img src={Open} alt="" />
          </A.SortBar>
          <A.Sortlist className={isSortVisible ? 'visible right' : 'right'}>
            <A.Sortitem onClick={() => handleSortSelect('최신순')}>최신순</A.Sortitem>
            <A.Sortitem onClick={() => handleSortSelect('인기순')}>인기순</A.Sortitem>
          </A.Sortlist>
        </A.Header>
        <A.Header style={{ height: '46px'}}>

          <A.CateItem>라면</A.CateItem>
          <A.CateItem>컵밥</A.CateItem>
          <A.CateItem>즉석 국•찌개</A.CateItem>
          <A.CateItem>레토르트</A.CateItem>

        </A.Header>
        <FoodList />
      </A.Main>
    </C.Common>
  );
}

export default Main;
