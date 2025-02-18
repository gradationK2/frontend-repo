import React from "react";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/SearchStyle";
import search from "../../assets/main/Search.svg"

function Search() {
  return (
    <C.Common>

      <A.Search>
        <A.SearchBar>
          <img src={search} alt="" />
          <input type="text" />
        </A.SearchBar>

        <A.Ranking>
          <div className="title">
            <div className="circle"></div>
            <div className="name">Popular Search</div>
          </div>
          <div className="inner">
            <div className="first">1<span>Buldak</span></div>
            <div className="second">2<span>Buldak</span></div>
            <div className="third">3<span>Buldak</span></div>
            <div >4<span>Buldak</span></div>
            <div >5<span>Buldak</span></div>
          </div>
        </A.Ranking>
      </A.Search>
    </C.Common>
  );
}

export default Search;
