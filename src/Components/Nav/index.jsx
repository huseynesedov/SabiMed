import './index.css'

import logo from './sabimedLogo.jpg'
import React, {useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const dillerTablo = [
    { name: "Türkçe", code: "tr" },
    { name: "Azerbaycan", code: "az" },
    { name: "English", code: "en" },
    { name: "Россия", code: "ru" },
    { name: "Almanya", code: "de" },
    { name: "Français", code: "fr" },
    { name: "Español", code: "es" },
];







const Header = () => {
    const [dropDown, setDropDown] = useState("");
    const [acmaq, setAcmaq] = useState(false);


    const handleSearchClick = () => {
        setAcmaq(!acmaq);
    };

    const { t, i18n } = useTranslation();


    const dilChange = (dil) => {
        setDropDown("tr");
        i18n.changeLanguage(dil.code);
        toast.success(dil.name)
        localStorage.setItem('language', dilChange.code);
    };

    return (

        <nav>
            <div className={`navbar ${acmaq ? 'showInput' : ''}`}>
                <FaBars className="fas" onClick={handleSearchClick} />
                <div className="logo">
                    <Link to="/">
                        <img
                            src={logo}
                            alt=""
                        />
                    </Link>
                </div>
                <div className={`nav-links ${acmaq ? 'gosder' : 'baglamaq'}`}>
                    <div className="sidebar-logo">
                        <FaX className="bx-x" onClick={handleSearchClick} />
                    </div>
                    
                    <ul className="links">
                        <li>
                            <Link to="/">
                            {t("nav.home")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">{t("nav.we")}</Link>
                        </li>
                        <li>
                            <Link to="/Question">{t("nav.sss")}</Link>
                        </li>
                        <li>
                            <Link to="/Contact">{t("nav.blog")}</Link>
                        </li>
                        <li>
                            <Link to="/Expertise">{t("nav.areas")}</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="icons">

                    <div className="flex-row">
                        <div className="d-flex col gap-2">
                            <div className="flex justify-content-center mt-1">
                                <div className="dropdown">
                                    <GrLanguage
                                        style={{ fontSize: "30px" }}
                                        className="cursor-pointer mt-1 dropdown-toggle dunya-logo "
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        onClick={() => setDropDown("show")}
                                        onMouseMove={() => setDropDown("show")}
                                    />
                                    <div
                                        className={`dropdown-menu ${dropDown}`}
                                        aria-labelledby="dropdownMenuButton"
                                        aria-expanded="true"
                                        onMouseLeave={() => setDropDown("")}
                                    >
                                        {dillerTablo.map((dil, index) => (
                                            <span
                                                key={index}
                                                className="dropdown-item cursor-pointer"
                                                onClick={() => dilChange(dil)}
                                            >
                                                {dil.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </nav >



        // <nav className="navigation">

        //     <a href="/" className="brand-name">
        //         <div>

        //         <img src={logo} alt="" width="100px" />
        //         </div>
        //     </a>

        //     <div
        //         className={
        //             isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        //         }
        //     >
        //     <button
        //         className="hamburger"
        //         onClick={() => {
        //             setIsNavExpanded(!isNavExpanded)
        //         }}
        //     >
        //         <GiHamburgerMenu />
        //     </button>
        //         <ul>
        //             <li>
        //                 <Link to="/">{t("nav.home")}</Link>
        //             </li>
        //             <li>
        //                 <Link to="/About">{t("nav.employers")}</Link>
        //             </li>
        //         </ul>
        //         <div >
        //             <div className="flex-row">
        //                 <div className="d-flex col gap-2">
        //                     <div className="flex justify-content-center mt-1">
        //                         <div className="dropdown">
        //                             <GrLanguage 
        //                                 style={{ fontSize: "30px" }}
        //                                 className="cursor-pointer mt-1 dropdown-toggle dunya-logo "
        //                                 id="dropdownMenuButton"
        //                                 data-toggle="dropdown"
        //                                 aria-haspopup="true"
        //                                 aria-expanded="false"
        //                                 onClick={() => setDropDown("show")}
        //                                 onMouseMove={() => setDropDown("show")}
        //                             />
        //                             <div
        //                                 className={`dropdown-menu ${dropDown}`}
        //                                 aria-labelledby="dropdownMenuButton"
        //                                 aria-expanded="true"
        //                                 onMouseLeave={() => setDropDown("")}
        //                             >
        //                                 {dillerTablo.map((dil, index) => (
        //                                     <span
        //                                         key={index}
        //                                         className="dropdown-item cursor-pointer"
        //                                         onClick={() => dilChange(dil)}
        //                                     >
        //                                         {dil.name}
        //                                     </span>
        //                                 ))}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav>


    );
};

export default Header;