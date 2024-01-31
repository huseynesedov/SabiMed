import React from 'react';
import './index.css'

import { useTranslation } from 'react-i18next';

function HealthcareSection() {
    const { t } = useTranslation();
    return (
        <>
            {/* SectionOne */}
            <div className='sectionOne'>
                <div className="sectionOne-centerLeft">
                    <div className='divOne'>
                        <div>
                            <h1 data-aos="fade-up" className='h1One'>
                                {t("HealthcarePage.healthcare")}
                            </h1>

                        </div>
                    </div>
                    <div data-aos="fade-up" className='divTwo'>
                        <p>
                            {t("HealthcarePage.providing")}
                        </p>
                    </div>
                </div>
            </div>

            {/* SectionTwo */}
            <div className="sectionTwo">

                <div className="sectionTwo-center">
                    <div className="sectionTwo-center-top">
                        <h1 className='h1Two'>
                            {t("HealthcarePage.wsi")}
                        </h1>
                        <small>
                            <p className='pTwo'>
                                {t("HealthcarePage.changing")}
                            </p>
                        </small>
                    </div>

                    <div className="sectionTwo-center-center">
                        <div data-aos="zoom-in-up" className="img-div">
                            <img  src="https://images.squarespace-cdn.com/content/v1/51b6529ce4b0c042edeedf2d/1387405834693-3Y65QWSCWNOP7NCY1Y6A/iStock_000008930645Large.jpg" alt="" />
                        </div>
                        <div className="text">
                            <h1 data-aos="zoom-in-up" className='h1Three'>
                                {t("HealthcarePage.healthcare")}
                            </h1>
                            <p data-aos="fade-down" className='pThree'>
                                {t("HealthcarePage.since")}

                            </p>
                        </div>
                    </div>

                 <div className="top-50"></div>
                 <br />
                 <br />

                </div>
            </div>
        </>


    );
}

export default HealthcareSection;