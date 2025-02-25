import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as A from "../../styles/FoodStyle";

function FoodList({ category, sortType }) {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const sortParam = sortType === "인기순" ? "popular" :  "new" ;
   
    axios
      .get(`/api/food`, {
        params: {
          category: category,
          sort: sortParam,
        },
        paramsSerializer: (params) => {
          return `category=${params.category}&sort=${params.sort}`;
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setFoods(response.data);
    
        }
      })
      .catch((error) =>
        console.error("카테고리 데이터를 가져오는 중 오류 발생:", error)
      );
  }, [category, sortType]);

  const handleClick = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <A.FoodList>
         
      {foods.map((food) => (
        <A.FoodItem key={food.id} onClick={() => handleClick(food.id)}>
          <div className="background">
            <img src={food.imgUrl}  alt={food.name} />
          </div>
          <A.FoodTitle>
            <div className="circle"></div>
            <p>{food.name}</p>
          </A.FoodTitle>
        </A.FoodItem>
      ))}
    </A.FoodList>
  );
}

export default FoodList;
