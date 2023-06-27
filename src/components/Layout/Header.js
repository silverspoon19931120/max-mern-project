import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/handle-purple.svg";
import MenuBtn from "../Widgets/MenuBtn";
export default function Header({ onFullMenu = () => { }, setIsDropMenu=()=>{}, setIsset=()=>{} }) {
  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-container flex items-center justify-between h-74 w-full bg-white header-shadow fixed z-20">
      <div className="flex items-center">
        <div>
          <Link to="/">
            <img src={"https://www.ultimate.ai/hubfs/raw_assets/public/ultimate/images/ultimate-logo.svg"} className="w-28 pb-1" alt="logo" />
          </Link>
        </div>
        <div className="md:flex items-center hidden">
          <p className="pt-4 pb-4 ml-20 hover:text-gray-500 cursor-pointer text-lg" onMouseEnter={()=>{setIsDropMenu(true); setIsset('Product')}}>
            Product
          </p>
          <p className="pt-4 pb-4 ml-20 hover:text-gray-500 cursor-pointer text-lg" onMouseEnter={()=>{setIsDropMenu(true); setIsset('Solutions')}}>
            Solutions
          </p>
          <p className="pt-4 pb-4 ml-20 hover:text-gray-500 cursor-pointer text-lg" onMouseEnter={()=>{setIsDropMenu(true); setIsset('Resources')}}>
            Resources
          </p>
          <p className="pt-4 pb-4 ml-20 hover:text-gray-500 cursor-pointer text-lg" onMouseEnter={()=>{setIsDropMenu(true); setIsset('Company')}}>
            Company
          </p>
        </div>
      </div>
      <div className="md:flex items-center  hidden">
        <p className="pt-4 pb-4 ml-4 hover:text-gray-500 cursor-pointer text-lg">
          Log In
        </p>
        <button className="rounded-full p-3 ml-4 !bg-black"><div className="text-white px-4 font-sans">Contact Sales</div></button>
      </div>
      <MenuOutlined
        onClick={() => onFullMenu(true)}
        className="text-2xl md:hidden hover:text-main cursor-pointer"
      />
    </div>
  );
}
