import React from "react";
import { useNavigate } from "react-router-dom"; 
import test from "../../assets/main/dummy.png";
import * as A from "../../styles/FoodStyle";

function FoodList() {
    const navigate = useNavigate(); 

    const handleClick = (id) => {
        navigate(`/food/${id}`);
    };

    return (
        <A.FoodList>
            {[1, 2, 3, 4].map((id) => (
                <A.FoodItem key={id} onClick={() => handleClick(id)}>
                    <div className="background">
                        <img src={test} alt="" />
                    </div>
                    <A.FoodTitle>
                        <div className="circle"></div>
                        <p>Buldak {id}</p>
                    </A.FoodTitle>
                </A.FoodItem>
            ))}
        </A.FoodList>
    );
}

export default FoodList;
