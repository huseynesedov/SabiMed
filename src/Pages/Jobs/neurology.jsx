import React from 'react';
import './indexAll.css'
import { Helmet } from "react-helmet";

import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer/footer';

import { useTranslation } from 'react-i18next';

function Arm() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SabiMed - Neurology</title>
            </Helmet>

            <Navbar />
            <div className="job-infor-main">
                <h1>
                    {t("neurology.name")}
                </h1>
            </div>
            <div className="job-center-main">
                <div className="textMain">

                    <div className="div13 foto"></div>

                    <div className="xet"></div>
                    <h5 className='h5'>

                        {t("neurology.info")}
                    </h5>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Arm;
