import './index.css'

import logo from './sabimedLogo.jpg'
import React, { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const dillerTablo = [
    {name: "Türkçe", code: "tr" },
    { name: "English", code: "en" },
    { name: "Azerbaycan", code: "az" },
    { name: "Россия", code: "ru" },
    { name: "Almanya", code: "de" },
    { name: "Français", code: "fr" }, 
    { name: "Español", code: "es" }, 
];

const user = [{ userName: "admin@gmail.com", lang: "tr" }];
const Header = () => {
    const [dropDown, setDropDown] = useState("");
    let browserLang = window.navigator.language;
    const { t, i18n } = useTranslation();
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    useEffect(() => {
        if (user.lang && user.lang !== browserLang) {
            i18n.changeLanguage(user.lang);
        } else {
            i18n.changeLanguage(browserLang);
        }
    }, [browserLang, i18n]);

    const dilChange = (dil) => {
        setDropDown("");
        i18n.changeLanguage(dil.code);
        toast.success(dil.name)
    };

    return (
       
            <nav className="navigation">
                
                <a href="/" className="brand-name">
                    <div>

                    <img src={logo} alt="" width="100px" />
                    </div>
                </a>
                <div
                    className={
                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }
                >
                <button
                    className="hamburger"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}
                >
                    <GiHamburgerMenu />
                </button>
                    <ul>
                        <li>
                            <Link to="/">{t("nav.home")}</Link>
                        </li>
                        <li>
                            <Link to="/About">{t("nav.employers")}</Link>
                        </li>
                    </ul>
                    <div >
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
                </div>
            </nav>


    );
};

export default Header;