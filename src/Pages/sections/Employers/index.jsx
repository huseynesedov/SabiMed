import React from 'react';
import './index.css'

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


function EmployersSection() {
    const { t } = useTranslation();
    return (
        <>
            {/* SectionThree */}
            <div className='sectionThree'>
                <div className="sectionOne-centerLeft">
                    <div className='divOne'>
                        <div>
                            <h1 data-aos="zoom-in" className='h1One'>
                                {t("EmployersPage.employers")}
                            </h1>

                        </div>
                    </div>
                    <div className='divTwo'>
                        <p data-aos="zoom-in">
                            {t("EmployersPage.find")}
                        </p>
                    </div>
                </div>
            </div>

            {/* SectionFour */}
            <div className="sectionFour">
                <div className="sectionTwo-center">
                    <div className="sectionTwo-center-top">
                        <h1 className='h1Two'>
                            {t("EmployersPage.Flexible")}
                        </h1>
                        <small>
                            <p className='pFour'>
                                {t("EmployersPage.wsi")}
                            </p>
                        </small>
                    </div>
                    <div className="top"></div>
                    <hr />



                    <div className="sectionFour-center-center">

                        <div data-aos="fade-down" className="div1">

                            <span className='span'>
                                <Link to="/Bone" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("Bone.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>

                        </div>
                        <div data-aos="fade-down" className="div3">
                            <span className='span'>
                                <Link to="/Kidney" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("Kidney.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div2">
                            <span className='span'>
                                <Link to="/Liver" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("Liver.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div4">
                            <span className='span'>
                                <Link to="/Arm" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("arm.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div5">
                            <span className='span'>
                                <Link to="/Size" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("size.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div6">
                            <span className='span'>
                                <Link to="/Speech" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("speech.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div7">
                            <span className='span'>
                                <Link to="/Hernia" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("hernia.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div8">
                            <span className='span'>
                                <Link to="/Eye" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("eye.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div9">
                            <span className='span'>
                                <Link to="/Ear" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("ear.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div10">
                            <span className='span'>
                                <Link to="/Breast" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("breast.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div11">
                            <span className='span'>
                                <Link to="/Stomach" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("stomach.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div12">
                            <span className='span'>
                                <Link to="/Baby" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("baby.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div13">
                            <span className='span'>
                                <Link to="/Neurology" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("neurology.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div14">
                            <span className='span'>
                                <Link to="/Neurosurgery" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("neurosurgery.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div15">
                            <span className='span'>
                                <Link to="/Orthopedics" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("orthopedics.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div16">
                            <span className='span'>
                                <Link to="/Pancreas" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("pancreas.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div17">
                            <span className='span'>
                                <Link to="/Pelvis" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("pelvis.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div18">
                            <span className='span'>
                                <Link to="/Prostat" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("prostat.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div19">
                            <span className='span'>
                                <Link to="/Bile" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("bile.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div20">
                            <span className='span'>
                                <Link to="/Cerebral" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("cerebral.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-down" className="div21">
                            <span className='span'>
                                <Link to="/Audio" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("audio.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                        <div data-aos="fade-up" className="div22">
                            <span className='span'>
                                <Link to="/Thyroid" className='a'>
                                    <span className='div-center'>
                                        <h1>{t("thyroid.name")}</h1>
                                    </span>
                                    <span className='div-bot'>

                                        <button className='but'>{t("Bone.det")}</button>
                                    </span>
                                </Link>
                            </span>
                        </div>
                    </div>


                </div>

            </div >
        </>


    );
}

export default EmployersSection;