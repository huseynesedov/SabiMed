import React from 'react';
import './index.css'

import { useTranslation } from 'react-i18next';


function JobSection() {
  const { t } = useTranslation();

  return (
    <>
      {/* SectionFive*/}

      <div className='sectionFive'>
        <div className="sectionOne-centerLeft">
          <div className='divOne'>
            <div>
              <h1 data-aos="zoom-in" className='h1One'>
                {t("JobPage.job")}
              </h1>

            </div>
          </div>
          <div className='divTwo'>
            <p data-aos="zoom-in">
              {t("JobPage.search")}
            </p>
          </div>
        </div>
      </div>

      {/* SectionSix*/}

      <div className="sectionSix">
        <div className="sectionTwo-center">

          <div className="sectionTwo-center-top">
            <h1 data-aos="zoom-in" className='h1Two'>
              {t("JobPage.find")}
            </h1>
            <small>
              <p data-aos="zoom-in" className='pFour pSix'>
                {t("JobPage.enjoy")}
              </p>
            </small>
          </div>

          <div className="sectionFour-center-bottom">

            <div className="photoSix">
              <div>
                <img data-aos="zoom-in" src="https://images.squarespace-cdn.com/content/v1/51b6529ce4b0c042edeedf2d/1391023490850-WS0WC2UWR67G8HSQA88B/iStock_000010096594Medium.jpg" alt="" className="imgSix" />
              </div>
              <div>
                <img data-aos="zoom-in" src="https://images.squarespace-cdn.com/content/v1/51b6529ce4b0c042edeedf2d/1391113416286-8VL9SJ5YWDJX9SUVRTXF/iStock_000031910620Large.jpg" alt="" className="imgSix" />
              </div>
              <div>
                <img data-aos="zoom-in" src="https://images.squarespace-cdn.com/content/v1/51b6529ce4b0c042edeedf2d/1391023441259-XPAMHDJ4QJFO09L7WL4W/iStock_000021698825Large.jpg" alt="" className="imgSix" />
              </div>
            </div>
          </div>

          <div className="sectionFour-center-bottom">
            <div className="centerFour">

              <div className="centerFour-divOne">


                <div>
                  <p data-aos="fade-down" class="card-text">
                    <strong>

                      {t("HealthcarePage.Job")}
                    </strong>
                  </p>
                  <small data-aos="fade-up" class="text-muted">
                    {t("JobPage.thefast")}

                  </small>
                </div>

                <div className="top"></div>
                <div className="top"></div>
                <div>

                  <p data-aos="fade-up" class="card-text">
                    <strong>

                      {t("JobPage.placement")}
                    </strong>
                  </p>
                  <small data-aos="fade-down" class="text-muted">
                    {t("JobPage.healthcare")}

                  </small>
                </div>

              </div>
              <div className="centerFour-divTwo">
                <p data-aos="fade-up" class="card-text">
                  <strong>
                    {t("JobPage.find")}
                  </strong>
                </p>
                <small data-aos="fade-down" class="text-muted">
                  {t("JobPage.we")}
                </small>
                <div className="fourth_section">
                  <div className="top-50"></div>
                  <form action="#">
                    <div className="form_control">
                      <input type="text" placeholder="Name" />
                      <input type="email" placeholder="Email" />
                      <input type="tel" placeholder="Phone Number" />
                    </div>
                    <div className="form_control">
                      <textarea
                        name=""
                        id=""
                        cols={10}
                        rows={2}

                        placeholder="Write Message....."
                        defaultValue={""}
                      />
                    </div>
                    <button type="button">{t("footer.send")}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>

  );
}

export default JobSection;