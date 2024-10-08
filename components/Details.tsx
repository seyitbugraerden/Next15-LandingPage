import React from "react";

const Details = () => {
  return (
    <>
      <div id="details" className="pt-12 pb-16 lg:pt-16">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <div className="mb-16 lg:mb-0 xl:mt-16">
              <h2 className="mb-6">
                Results driven ground breaking technology
              </h2>
              <p className="mb-4">
                Based on our team's extensive experience in developing line of
                business applications and constructive customer feedback we
                reached a new level of revenue.
              </p>
              <p className="mb-4">
                We enjoy helping small and medium sized tech businesses take a
                shot at established Fortune 500 companies
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="xl:ml-14">
              <img
                className="inline"
                src="images/details-1.jpg"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <div className="mb-12 lg:mb-0 xl:mr-14">
              <img
                className="inline"
                src="images/details-2.jpg"
                alt="alternative"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="xl:mt-12">
              <h2 className="mb-6">
                Instant results for the marketing department
              </h2>
              <ul className="list mb-7 space-y-2">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Features that will help you and your marketers</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Smooth learning curve due to the knowledge base</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Ready out-of-the-box with minor setup settings</div>
                </li>
              </ul>
              <a
                className="btn-solid-reg popup-with-move-anim mr-1.5"
                href="#details-lightbox"
              >
                Lightbox
              </a>
              <a className="btn-outline-reg" href="article.html">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
