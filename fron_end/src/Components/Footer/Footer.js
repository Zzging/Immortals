import React, { useState } from "react";

import "./Footer.css";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <section className="footer">
      {/* <div className={isMobile ? "footer-links-mobile" : "footer-info-right"}> */}
      <section className="footer-info">
        <section className="footer-info-left d-flex align-items-center">
          <section className="footer-info__returns">
            <img
              src="/img/Icon-awesome-facebook.svg"
              alt="travel image"
              className="icon-cc"
            />
          </section>
          <section className="footer-info__returns mx-4">
            <img
              src="/img/Icon-ionic-logo-youtube.svg"
              alt="travel image"
              className="icon-cc"
            />
          </section>
          <section className="footer-info__returns">
            <img
              src="/img/Icon-awesome-instagram.svg"
              alt="travel image"
              className="icon-cc"
            />
          </section>
        </section>
        {/* <div className="footer-info-center"> */}
        <div
          className={isMobile ? "footer-links-mobile" : "footer-info-center"}
        >
          <section className="footer-info__terms fs-6 fw-light mr-2 text-nowrap">
            @2022 IMMORTALStHAILAND.ALL RESERVED
          </section>
        </div>
        {/* <section className="footer-info-right"> */}
        <div
          className={isMobile ? "footer-links-mobile3" : "footer-info-right"}
        >
          <section className="footer-info__returns fs-5 fw-light me-3 text-nowrap">
            Term & Condition
          </section>
          <section className="footer-info__returns fs-5 fw-light mr-2 text-nowrap">
            Privacy
          </section>
        </div>
      </section>

      <div className="footer-social-media">
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <section className="footer-info__terms  fw-light mr-2 text-nowrap">
            @2022 IMMORTALStHAILAND.ALL RESERVED
          </section>
        )}
      </div>

      <div className="footer-social-3">
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <>
            <section className="footer-info">
              <section className="footer-info-left d-flex align-items-center">
                <section className="footer-info__returns">
                  <img
                    src="/img/Icon-awesome-facebook.svg"
                    alt="travel image"
                    className="icon-cc"
                  />
                </section>
                <section className="footer-info__returns">
                  <img
                    src="/img/Icon-ionic-logo-youtube.svg"
                    alt="travel image"
                    className="icon-cc"
                  />
                </section>
                <section className="footer-info__returns">
                  <img
                    src="/img/Icon-awesome-instagram.svg"
                    alt="travel image"
                    className="icon-cc"
                  />
                </section>
              </section>

              <section className="footer-info__returns fs-6 fw-light mr-2">
                Term & Condition Privacy
              </section>

              <section className="footer-info__terms   fw-light mr-2">
                @2022 IMMORTALStHAILAND.ALL RESERVED
              </section>
            </section>
          </>
        )}
      </div>
    </section>
  );
}

export default Footer;
