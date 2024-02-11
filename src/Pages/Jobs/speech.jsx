import React from 'react';
import './indexAll.css'
import { Helmet } from "react-helmet";

import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer/footer';

import { useTranslation } from 'react-i18next';

function Speech() {
    const { t } = useTranslation();

    return (
        <>
           <Helmet>
                <meta charSet="utf-8" />
                <title>SabiMed - Tongue Tumor</title>
            </Helmet>

            <Navbar />
            <div className="job-infor-main">
                <h1>
                    {t("speech.name")}
                </h1>
            </div>
            <div className="job-center-main">
                <div className="textMain">

                    <div className="div6 foto"></div>

                    <div className="xet"></div>
                    <h5 className='h5'>

                        {t("speech.infor")}
                    </h5>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Speech;
