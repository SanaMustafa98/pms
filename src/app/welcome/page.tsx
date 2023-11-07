'use client'
import { useState } from "react";
import {
  AiFillEnvironment,
  AiOutlineLogin
} from "react-icons/ai";
import Agents from "./components/Agents";
import DashboardPage from "./components/DashboardPage";
import LandlordsPage from "./components/LandlordsPage";
import LeasesPage from "./components/LeasesPage";
import LogoutPage from "./components/LogoutPage";
import PropertiesPage from "./components/PropertiesPage";
import PropertyInventoryPage from "./components/PropertyInventoryPage";
import PropertyTypesPage from "./components/PropertyTypesPage";
import PropertyUnitsPage from "./components/PropertyUnitsPage";
import SourcesPage from "./components/SourcesPage";
import TenantsPage from "./components/TenantsPage";

import {
  FaPersonShelter,
  FaPersonWalkingLuggage
} from "react-icons/fa6";
import { MdInventory2, MdOutlineRealEstateAgent, MdSupportAgent } from "react-icons/md";


import {
  BsArrowLeftShort
} from "react-icons/bs";
import { SiCrowdsource } from "react-icons/si";

import {
  FcFactory,
  FcLandscape,
  FcOrgUnit,
} from "react-icons/fc";

import {
  RiDashboardFill
} from "react-icons/ri";

// ===================


const Page = () => {

  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [open, setOpen] = useState(true);


  //menu items

  const Menus = [
    { title: "Dashboard" },
    
    { title: "Landlords", icon: <FaPersonShelter /> },
    { title: "Tenants", icon: <MdOutlineRealEstateAgent /> },
    { title: "Sources", icon: <SiCrowdsource /> },
    { title: "Properties", icon: < FcLandscape /> },
    { title: "PropertyTypes", icon: < FcFactory /> },
    { title: "PropertyUnits", icon: <FcOrgUnit /> },
    { title: "PropertyInventory", icon: <MdInventory2 /> },
    { title: "Agents", icon: <MdSupportAgent /> },

    { title: "Leases", icon: <FaPersonWalkingLuggage /> },

    { title: "Logout", icon: <AiOutlineLogin /> },


  ]

  return (
    //    main flex page
    <div className="flex bg-white">

      {/* Sidebar */}
      <div className={`bg-blue-950 text-white h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>

        <BsArrowLeftShort
          className={`bg-black
  text-blue
   text-3xl
    rounded-full
     absolute -right-3 top-9
      border border-blue 
      cursor-pointer
       ${!open && "rotate-180"} `}
          onClick={() => setOpen(!open)} />


        {/* sidebar logo */}
        <div className="inline-flex">
          <AiFillEnvironment className=" bg-amber-500 text-4xl
               rounded cursor-pointer  black  float-left mr-2"/>
          <h1
            className={`text-white
  origin-left
   font-medium
 text-2xl duration-300
 ${!open && "scale-0"}
 
 
 `}
          >PMS</h1>
        </div>

        {/* sidebar menu */}
        <ul className=" pt-2">
          {Menus.map((menu ) => (
            <>
              <li
                key={menu.title}  
                onClick={() => {
                  setSelectedMenuItem(menu.title);
                  setCurrentPage(menu.title);
                }}
                className={`text-sm text-gray-300 flex items-center gap-x-4 
                cursor-pointer p-2 hover:bg-light-white 
                rounded-md mt-2
                 ${selectedMenuItem === menu.title ? "bg-black text-white" : ""
                  }`}
              >
                {/* for icons of sidebar */}
                <span className="text-2xl block  float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>

                <span className={`text-base font-medium 
                flex-1 duration-200
                   ${!open && "hidden"}`}>
                  {menu.title}</span>
              </li>
            </>
          ))}

        </ul>
      </div>





      {/* Home page content */}





      <div className="p-7">

        {currentPage === "Dashboard" && <DashboardPage />}
        {currentPage === "Landlords" && <LandlordsPage />}
        {currentPage === "Tenants" && <TenantsPage />}
        {currentPage === "Sources" && <SourcesPage />}
        {currentPage === "Properties" && <PropertiesPage />}
        {currentPage === "PropertyTypes" && <PropertyTypesPage />}
        {currentPage === "PropertyUnits" && <PropertyUnitsPage />}
        {currentPage === "PropertyInventory" && <PropertyInventoryPage />}
        {currentPage === "Agents" && <Agents />}
        {currentPage === "Leases" && <LeasesPage />}
       
        {currentPage === "Logout" && <LogoutPage />}


      </div>
    </div>



  );




};

export default Page;
