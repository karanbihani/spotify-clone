import React, {useContext,useState,useEffect} from "react";
import ProtoTypes from "prop-types";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

function Navigation(){
    return(<div className="navigation-container">
        <p className="icon-text-style"><HomeOutlinedIcon/> Home</p>
        <p className="icon-text-style"><SearchIcon/>Search</p>
    </div>)
}

export default Navigation;