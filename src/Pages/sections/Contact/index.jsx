import './index.css'

import { CgMail } from "react-icons/cg";
import { FaEarthAfrica, FaPhoneVolume } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
function Contact() {

    const { t } = useTranslation();
    return (

        <>
            <div className="job-infor-main">
                <h1>
                    {t("Contact.contact")}
                </h1>
            </div>
            <div className="sectionSix">
                <div className="sectionTwo-center">
                    <div className="blog-center">

                        <div className="top-form">
                            <div className='form-center'>

                                <div className="left">

                                    <span className='radius'>
                                        <FaPhoneVolume />
                                    </span>
                                    <div className='phone'>
                                        <h6>
                                        {t("Contact.phone")}
                                        </h6>
                                        <p>+90 540 340 60</p>
                                    </div>
                                </div>

                                <div className="center">
                                    <div className='center-center'>

                                        <span className='radius'>
                                            <FaEarthAfrica />
                                        </span>
                                        <div className='phone'>
                                            <h6>
                                            {t("Contact.ofis")}
                                            </h6>
                                            <p>Çukurambar Mah. Malcolm X Cad. Karaca Plaza, 8/5-6 Kat 3, Çankaya/Ankara</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="right2">
                                <span className='radius'>
                                <CgMail />
                                    </span>
                                    <div className='phone'>
                                        <h6>
                                        {t("Contact.mail")}
                                        </h6>
                                        <p>asadof28@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="bottom-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11205.89626352849!2d32.801642!3d39.907807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d348aebb75d8c3%3A0x9e6e24afe74923f7!2zw4d1a3VyYW1iYXIsIE1hbGNvbG0gWCBDZC4gTm86NiwgMDY1MTAgw4dhbmtheWEvQW5rYXJhLCDQotGD0YDRhtC40Y8!5e1!3m2!1sru!2sus!4v1706965322421!5m2!1sru!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Contact;





