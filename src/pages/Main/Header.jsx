import React from 'react'
import SearchIcon from "../../assets/main/Search.svg";
import Logo from "../../assets/main/logo.png";
import User from "../../assets/main/Person.svg";
import * as C from "../../styles/CommonStyle";
import { useNavigate } from "react-router-dom"; 
const Header = () => {
    const navigate = useNavigate(); 
    return (
        <C.Header>
            <img src={SearchIcon} alt="" onClick={() => navigate('/search')}/>
            <img src={Logo} alt="" className="logo"  />
            <img src={User} alt="" />
        </C.Header>
    )
}

export default Header
