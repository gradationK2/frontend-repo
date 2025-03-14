import React, { useState, useEffect, useMemo } from "react";

import Open from "../../assets/main/Forward.svg";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/MainStyle";
import Header from "./Header";
import FoodList from "./FoodList";

function Main() {

  const cateList = [
    '즉석•간편식품',
    '소스 및 양념류',
    '김치 및 절임류',
    '스낵 및 과자류',
    '냉동식품',
    '음료 및 주류',
    '쌀 및 곡류 제품',
    '육 및 해 가공식품'
  ];

 
  const foodCateMapping = useMemo(() => ({
    '즉석•간편식품': [
      '라면',
      '컵밥',
      '즉석 국·찌개',
      '레토르트 음식',
    ],
    '소스 및 양념류': [
      '소스',
      '양념류'
    ],
    '김치 및 절임류': [
      '김치류',
      '절임류'
    ],
    '스낵 및 과자류': [
      '김스낵',
      '전통 한과',
      '과자'
    ],
    '냉동식품': [
      '냉동 음식',
      '냉동 밀가루 음식',
      '냉동 국수 및 면류'
    ],
    '음료 및 주류': [
      '전통 음료',
      '과일 음료',
      '주류'
    ],
    '쌀 및 곡류 제품': [
      '즉석밥',
      '떡 제품'
    ],
    '육 및 해 가공식품': [
      '조미김',
      '건어물'
    ]
  }), []);

  const [selectCate, setSelectCate] = useState(0);
  const [recent, setRecent] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);

  const [selectedFoodCate, setSelectedFoodCate] = useState("라면");

  useEffect(() => {
    const currentFoodCateList = foodCateMapping[cateList[selectCate]] || [];
    if (!currentFoodCateList.includes(selectedFoodCate)) {
      setSelectedFoodCate(currentFoodCateList[0] || "");
    }
  }, [selectCate, selectedFoodCate, cateList, foodCateMapping]);
  
  const handleCategorySelect = (index) => {
    console.log("선택한 대분류 카테고리 인덱스:", index);
    setSelectCate(index);
    setIsCategoryVisible(false);
  };

  const handleSortSelect = (sortType) => {
    setRecent(sortType === '최신순');
    setIsSortVisible(false);
  };

  const handleFoodCateClick = (cate) => {
    console.log("선택한 음식 세부 카테고리:", cate);
    setSelectedFoodCate(cate);
  };

  const currentFoodCateList = foodCateMapping[cateList[selectCate]] || [];
  
  return (
    <C.Common>
      <A.Main>
        <Header className="border" />
        <A.Header className="border" style={{ justifyContent: 'space-between', padding: '0 20px' }}>
        
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
      
        <A.Header style={{ height: '46px' }}>
          {currentFoodCateList.map((cate, index) => (
            <A.CateItem
              key={index}
              onClick={() => handleFoodCateClick(cate)}
              className={selectedFoodCate === cate ? "active" : ""}
            >
              {cate}
            </A.CateItem>
          ))}
        </A.Header>
      
        <FoodList 
          category={selectedFoodCate} 
          sortType={recent ? "최신순" : "인기순"} 
        />
      </A.Main>
    </C.Common>
  );
}

export default Main;
