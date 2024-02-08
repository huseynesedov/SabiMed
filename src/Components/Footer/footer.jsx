
import "./footer.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

function Footer() {
    const { t } = useTranslation();
    return (

        <>
            <div className="top-50"></div>

            <footer>
                <div className="container">
                    <div className="footer_content">
                        <div className="first_section div">
                            <h3 className="footer_headings">{t("nav.we")}</h3>
                            <img src="images/logo-1.png" alt="" />
                            <p>
                                {t("footer.the")}
                            </p>
                            <div className="social_icons">
                                <Link to="https://www.instagram.com/sabimed_health_company/">
                                    <span className="i ii" >
                                    <FaInstagram />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="third_section div222">
                            <h3 className="footer_headings">{t("footer.adress")}</h3>
                            <ul>
                                <li>
                                    <span className="i" >

                                    <CgMail/>
                                    </span>
                                    <a href="mailto:info@sabimed.info">

                                    <span>info@sabimed.info</span>
                                    </a>
                                </li>
                                <li>
                                    <span className="i" >

                                    <FaMapLocationDot />
                                    </span>
                                    <span>Çukurambar Mah. Malcolm X Cad. Karaca Plaza, 8/5-6 Kat 3, Çankaya/Ankara</span>
                                </li>
                                <li>
                                    <span className="i" >
                                        <FaPhoneAlt />
                                    </span>
                                    <span>+905363378127</span>
                                </li>
                            </ul>
                        </div>
                        <div className="fourth_section div">
                            <h3 className="footer_headings">{t("footer.contact")}</h3>
                            <form action="#">
                                <div className="form_control">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="tel" placeholder="Phone Number" />
                                </div>
                                <div className="form_control">
                                    <textarea
                                        name=""
                                        id=""
                                        cols={10}
                                        rows={2}
                                        
                                        placeholder="Write Message....."
                                        defaultValue={""}
                                    />
                                </div>
                                <button type="button">{t("footer.send")}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
