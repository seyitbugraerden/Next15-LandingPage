import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
        <a
          className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
          href="index.html"
        >
          <Image src="/images/logo.svg" alt="alternative" className="h-8" width={32} height={32} />
        </a>

        <div
          className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
          id="navbarsExampleDefault"
        >
          <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
            <li>
              <a className="nav-link page-scroll active" href="#header">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#details">
                Details
              </a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="nav-link page-scroll" href="#download">
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
