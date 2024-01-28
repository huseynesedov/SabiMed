import React from 'react';
import './indexAll.css'
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer/footer';


function Size() {
    const { t } = useTranslation();

    return (
        <>
           <Helmet>
                <meta charSet="utf-8" />
                <title>SabiMed</title>
            </Helmet>

            <Navbar />
            <div className="job-infor-main">
                <h1>
                    {t("size.name")}
                </h1>
            </div>
            <div className="job-center-main">
                <div className="textMain">

                    <div className="div5 foto"></div>

                    <div className="xet"></div>
                    <h5 className='h5'>

                        {t("size.infor")}
                    </h5>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Size;
