"use client"
import React from 'react';
import {Avatar, Badge, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {pink} from "@mui/material/colors";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./index.css"
import {UserRequest} from "@/utils/api/request/UserRequest";
const Navbar = () => {
    const req=new UserRequest();
    return (
      <div className={`px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between `} >
          {/** logo **/}
          <div className={`flex items-center space-x-4 `}>
              <div className={`lg:mr-10 cursor-pointer flex items-center space-x-4`}>
                  <li className={`logo font-semibold text-gray-300 text-2xl`}>Sila food</li>
              </div>
          </div>
      {/** left side navbar  */}
          <div className={`flex items-center space-x-2 lg:space-x-10 `}>
              <div>
                  <IconButton>
                      <SearchIcon sx={{fontSize:'1.5rem'}}/>
                  </IconButton>
              </div>

             <div onClick={req.logout}>
                 <Avatar sx={{bgcolor:"white",color:pink.A400,fontWeight:600}}>MS</Avatar>
             </div>
              <div>
                  <IconButton>
                      <Badge  badgeContent={2} color="error">
                          <ShoppingCartOutlinedIcon sx={{fontSize:'1.5rem'}}/>
                      </Badge>
                  </IconButton>
              </div>
          </div>
      </div>
    );
};

export default Navbar;
