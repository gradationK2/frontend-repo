import React, { useState, useEffect } from "react";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/SearchStyle";
import searchIcon from "../../assets/main/Search.svg";
import { useNavigate } from "react-router-dom";
import Forward from "../../assets/main/Forward.svg"
import axios from "axios";


function Search() {
  const [searchText, setSearchText] = useState("");
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/food", { params: { sort: "popular" } })
      .then((response) => {
        if (response.status === 200) {
          setPopular(response.data.slice(0, 5));
        }
      })
      .catch((error) => {
        console.error("인기 검색어를 가져오는 중 오류 발생:", error);
      });
  }, []);

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      navigate(`/result/${encodeURIComponent(searchText)}`);
      window.location.reload();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <C.Common>
      <A.Search>
        <A.SearchBar>
          <div className="back" onClick={() => navigate(-1)}> <img src={Forward} alt="" /> </div>
          <div className="search">
            <img src={searchIcon} alt="검색" onClick={handleSearch} />
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </A.SearchBar>

        <A.Ranking>
          <div className="title">
            <div className="circle"></div>
            <div className="name">Popular Search</div>
          </div>
          <div className="inner">
            {popular.length > 0 ? (
              popular.map((item, index) => (
                <div
                  key={item.id}
                  className={index === 0 ? "first" : index === 1 ? "second" : index === 2 ? "third" : "rank-item"}
                  onClick={() => navigate(`/result/${encodeURIComponent(item.name)}`)}
                >
                  {index + 1} <span>{item.name}</span>
                </div>
              ))
            ) : (
              <p>인기 검색어를 불러오는 중...</p>
            )}
          </div>
        </A.Ranking>
      </A.Search>
    </C.Common>
  );
}

export default Search;
