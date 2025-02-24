import React, { useState, useEffect } from "react";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/SearchStyle";
import searchIcon from "../../assets/main/Search.svg";
import * as F from "../../styles/FoodStyle";
import test from "../../assets/main/dummy.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchResult = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState(query || "");

  useEffect(() => {
    axios
      .get("/api/food/search", { params: { query } })
      .then((response) => {
        if (response.status === 200) {
          setResults(response.data);
        }
      })
      .catch((error) => {
        console.error("검색 결과를 가져오는 중 오류 발생:", error);
      });
  }, [query]);

  const handleClick = (id) => {
    navigate(`/food/${id}`);
  };

  const handleSearch = () => {
    axios
      .get("/api/food/search", { params: { query: searchTerm } })
      .then((response) => {
        if (response.status === 200) {
          setResults(response.data);
          navigate(`/result/${searchTerm}`);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("검색 결과를 가져오는 중 오류 발생:", error);
      });
  };

  return (
    <C.Common>
      <A.Search>
        <A.SearchBar>
          <img src={searchIcon} alt="검색" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="검색어를 입력하세요."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </A.SearchBar>
        {results.length > 0 ? (
          <F.FoodList>
            {results.map((result) => (
              <F.FoodItem key={result.id} onClick={() => handleClick(result.id)}>
                <div className="background">
                  <img src={result.imgUrl || test} alt={result.title || result.name} />
                </div>
                <F.FoodTitle>
                  <div className="circle"></div>
                  <p>{result.title || result.name}</p>
                </F.FoodTitle>
              </F.FoodItem>
            ))}
          </F.FoodList>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </A.Search>
    </C.Common>
  );
};

export default SearchResult;
