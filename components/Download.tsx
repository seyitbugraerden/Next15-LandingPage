import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <div id="download" className="basic-5">
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
        <div className="mb-16 lg:mb-0">
          <Image
            src="/images/conclusion-smartphone.png"
            alt="alternative"
            width={480}
            height={480}
          />
        </div>
        <div className="lg:mt-24 xl:mt-44 xl:ml-12">
          <p className="mb-9 text-gray-800 text-3xl leading-10">
            Team management mobile applications don’t get much better than Pavo.
            Download it today
          </p>
          <a className="btn-solid-lg" href="#your-link">
            <i className="fab fa-apple"></i>Download
          </a>
          <a className="btn-solid-lg secondary" href="#your-link">
            <i className="fab fa-google-play"></i>Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
