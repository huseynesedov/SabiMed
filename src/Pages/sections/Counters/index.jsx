import React, { useState, useEffect } from 'react';
import './index.css'
import { useTranslation } from 'react-i18next';


const Sayac = () => {

  const [sayac1, setSayac] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sayac1 < 100) {
        setSayac(sayac1 + 1);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [sayac1]);

  const [sayac2, setSayac2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sayac2 < 1000) {
        setSayac2(sayac2 + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [sayac2]);

  const [sayac3, setSayac3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sayac3 < 10) {
        setSayac3(sayac3 + 1);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [sayac3]);

  const [sayac4, setSayac4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sayac4 < 100) {
        setSayac4(sayac4 + 1);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [sayac4]);

  const { t } = useTranslation();

  return (
    <>
      <div className="sectionFour dark">
        <div className="sectionTwo-center">
          <div className="counter-center">

            <h1 data-aos="zoom-in">
              {t("counters.name")}

            </h1>
            <div className="xet"></div>

            <div className='divss'>

              <div data-aos="fade-right" className="counter-div">
                <h2>
                  {sayac1}
                </h2>
                <p>
                  {t("counters.health")}
                </p>
              </div>
              <div data-aos="zoom-in" className="counter-div">
                <h2>
                  {sayac2}
                </h2>
                <p>
                  {t("counters.patient")}

                </p>
              </div>
              <div data-aos="zoom-in" className="counter-div">
                <h2>
                  {sayac3}
                </h2>
                <p>
                  {t("counters.personal")}

                </p>
              </div>
              <div data-aos="fade-left" className="counter-div">
                <h2>
                  {sayac4}
                </h2>
                <p>
                  {t("counters.tip")}

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bot-50"></div> */}
    </>
  );
};

export default Sayac;
