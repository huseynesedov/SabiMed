import { useState } from "react";
import { useTranslation } from 'react-i18next';
import './sss.css'
import { FaRegCircleQuestion } from "react-icons/fa6";

function Sss() {
    const [showWidget2, setShowWidget2] = useState(false);
    const [showWidget3, setShowWidget3] = useState(false);
    const [showWidget4, setShowWidget4] = useState(false);
    const [showWidget5, setShowWidget5] = useState(false);
    const [showWidget6, setShowWidget6] = useState(false);


    const handleShowWidget2 = () => {
        setShowWidget2(!showWidget2);
    };

    const handleShowWidget3 = () => {
        setShowWidget3(!showWidget3);
    };
    const handleShowWidget4 = () => {
        setShowWidget4(!showWidget4);
    };
    const handleShowWidget5 = () => {
        setShowWidget5(!showWidget5);
    };
    const handleShowWidget6 = () => {
        setShowWidget6(!showWidget6);
    };

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleShowWidget = (accordionId) => {
        setOpenAccordion((prevOpenAccordion) =>
            prevOpenAccordion === accordionId ? null : accordionId
        );
    };
    const { t } = useTranslation();
    return (

        <>
            <div className="job-infor-main">
                <h1>
                    {t("Question.name")}
                </h1>
            </div>
            <div className="sectionSix">
                <div className="sectionTwo-center">

                    <div className="top-40"></div>
                    <div className="justify-content-center">

                        <div className="col-md-8">
                            <div className="accordion" id="accordionExample1">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            onClick={() => handleShowWidget(1)}
                                            className={`accordion-button ${openAccordion === 1 ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded={openAccordion === 1 ? 'true' : 'false'}
                                            aria-controls="collapseOne"
                                        >
                                            <FaRegCircleQuestion className="icon-acardion" />

                                            {t("Question.health")}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className={`accordion-collapse collapse ${openAccordion === 1 ? 'show' : ''}`}
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample1"
                                    >
                                        <div className="accordion-body">
                                            {t("Question.ques")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-10"></div>
                        
                        <div className="col-md-8">
                            <div className="accordion" id="accordionExample2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            onClick={handleShowWidget2}
                                            className={`accordion-button ${showWidget2 ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded={showWidget2 ? 'true' : 'false'}
                                            aria-controls="collapseTwo"
                                        >
                                            <FaRegCircleQuestion className="icon-acardion" />
                                            {t("Question.quality")}

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className={`accordion-collapse collapse ${showWidget2 ? 'show' : ''}`}
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample2"
                                    >
                                        <div className="accordion-body">
                                            {t("Question.ques2")}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-10"></div>

                        <div className="col-md-8">
                            <div className="accordion" id="accordionExample3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            onClick={handleShowWidget3}
                                            className={`accordion-button ${showWidget3 ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded={showWidget3 ? 'true' : 'false'}
                                            aria-controls="collapseThree"
                                        >
                                            <FaRegCircleQuestion className="icon-acardion" />

                                            {t("Question.treatment")}

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className={`accordion-collapse collapse ${showWidget3 ? 'show' : ''}`}
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample3"
                                    >
                                        <div className="accordion-body">
                                            {t("Question.ques3")}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-10"></div>

                        <div className="col-md-8">
                            <div className="accordion" id="accordionExample3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            onClick={handleShowWidget4}
                                            className={`accordion-button ${showWidget4 ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded={showWidget3 ? 'true' : 'false'}
                                            aria-controls="collapseThree"
                                        >
                                            <FaRegCircleQuestion className="icon-acardion" />

                                            {t("Question.health-treatment")}

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className={`accordion-collapse collapse ${showWidget4 ? 'show' : ''}`}
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample3"
                                    >
                                        <div className="accordion-body">
                                            {t("Question.ques4")}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-10"></div>

                        <div className="col-md-8">
                            <div className="accordion" id="accordionExample3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            onClick={handleShowWidget5}
                                            className={`accordion-button ${showWidget5 ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded={showWidget3 ? 'true' : 'false'}
                                            aria-controls="collapseThree"
                                        >
                                            <FaRegCircleQuestion className="icon-acardion" />

                                            {t("Question.problem")}

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className={`accordion-collapse collapse ${showWidget5 ? 'show' : ''}`}
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample3"
                                    >
                                        <div className="accordion-body">
                                            {t("Question.ques5")}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-10"></div>

                        <div className="col-md-8">
                            <div className="accordion" id="accordionExample3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            onClick={handleShowWidget6}
                                            className={`accordion-button ${showWidget6 ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded={showWidget3 ? 'true' : 'false'}
                                            aria-controls="collapseThree"
                                        >
                                            <FaRegCircleQuestion className="icon-acardion" />

                                            {t("Question.come")}

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className={`accordion-collapse collapse ${showWidget6 ? 'show' : ''}`}
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample3"
                                    >
                                        <div className="accordion-body">
                                            {t("Question.ques6")}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Sss;





