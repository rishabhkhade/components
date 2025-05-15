import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

function Footer() {
  return (
    <>
      <div className="parent footer-parent">
        <div className="container footer-cont">
          <div className="logo">
            <h2>logo</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ut
              est vel saepe, nam quas nihil repellendus a laborum repudiandae.
            </p>
          </div>
         <div class="link-wrap">
         <div className="imp-links">
            <h3>Important Links</h3>
            <div class="nav-menu">
              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>

              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>

              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>

              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>
            </div>
          </div>
          <div className="other-links">
            <h3>Other Links</h3>
            <div class="nav-menu">
              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>

              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>

              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>

              <Link class="about">
                <span>
                  <RiArrowRightSLine />
                </span>
                <Link>About</Link>
              </Link>
            </div>
          </div>
         </div>
          <div className="contact">
            <h3>Contact</h3>
            <div class="nav-menu">
              <Link class="about">
                <span>
                  <FiPhone />
                </span>
                <Link>+91 9867464758</Link>
              </Link>

              <Link class="about">
                <span>
                  <FaRegEnvelope />
                </span>
                <Link>info@gmail.com</Link>
              </Link>

              <Link class="about">
                <span>
                  <CiLocationOn />
                </span>
                <Link>76, Lorem ipsum dolor sit.</Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
