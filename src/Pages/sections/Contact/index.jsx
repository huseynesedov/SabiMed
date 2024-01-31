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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48603.32208978703!2d49.899432238708464!3d40.41532725598381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4ee9253a65%3A0x29160f1a81905e71!2sNeriman%20Nerimanov!5e0!3m2!1str!2saz!4v1706656366862!5m2!1str!2saz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Contact;





