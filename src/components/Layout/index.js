import React, { useState } from "react";
import Footer from "./Footer";
import FullMenu from "./FullMenu";
import Header from "./Header";
import "./layout.css";
import ProductMenu from "../Menus/ProductMenu";
import SolutionsMenu from "../Menus/SolutionsMenu";
import ResourcesMenu from "../Menus/ResourcesMenu";
import CompanyMenu from "../Menus/CompanyMenu";
import { SwapRightOutlined } from "@ant-design/icons";

export default function Layout({ children = <></>, on = true }) {
  const [isTrue, setIsTrue] = useState(false);
  const [isDropMenu, setIsDropMenu] = useState(false)
  const [isset, setIsset] = useState("")
  return (
    <div className="relative">
      <FullMenu isTrue={isTrue} onIsTrue={setIsTrue} />
      <Header onFullMenu={setIsTrue} setIsDropMenu={setIsDropMenu} setIsset={setIsset}/>
      <div className={`px-4 md:px-8 lg:px-12 xl:px-container fixed w-full z-10 backdrop-blur-md bg-transparent pt-20 ${isDropMenu ? "" : "hidden"}`}>
        {isset === 'Product' && <ProductMenu setIsDropMenu={setIsDropMenu} />}
        {isset === 'Solutions' && <SolutionsMenu setIsDropMenu={setIsDropMenu}/>}
        {isset === 'Resources' && <ResourcesMenu setIsDropMenu={setIsDropMenu}/>}
        {isset === 'Company' && <CompanyMenu setIsDropMenu={setIsDropMenu}/>}
      </div>
      <div  className="pt-24 flex justify-center items-center text-center px-4 md:px-8 lg:px-12 xl:px-container w-full backdrop-blur-md bg-transparent">
        <p className="font-bold text-xl">Introducing UltimateGPT: Integrate the power of ChatGPT into your support center. </p>
        <a href="#" className="flex items-center">
          <p className="text-blue-500 pl-8 font-bold text-xl">Get already access</p> 
          <SwapRightOutlined />
        </a>
      </div>
      <div className={on ? "pt-8" : ""}>{children}</div>
      <Footer />
    </div>
  );
}
