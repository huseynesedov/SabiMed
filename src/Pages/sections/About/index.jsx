import React from 'react';
import './index.css'

import { useTranslation } from 'react-i18next';


function About() {
    const { t } = useTranslation();
    return (
        <>
            {/* SectionThree */}
            <div className='sectionThrees'>
                <div className="sectionOne-centerLeft">
                    <div className='divOne'>
                        <div>
                            <h1 className='h1One'>
                                {t("nav.we")}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* SectionFour */}
            <div className="sectionFour">
                <div className="sectionTwo-center">

                    <div className="about-centers">
                        <div className="left">
                            {t("About.about")}

                        </div>
                        <div className="right">
                            <img className='img1' src="https://ozkandangroup.com/wp-content/uploads/2023/02/yerli-e1671008022384.png" alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </>


    );
}

export default About;

