"use client"; // This marks the component as a Client Component
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const menubtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    const handleMenuClick = () => {
      menubtn?.classList.toggle("active");
      navigation?.classList.toggle("active");
    };

    menubtn?.addEventListener("click", handleMenuClick);

    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll('.video-slide') as NodeListOf<Element>;
    const contents = document.querySelectorAll(".content");

    const sliderNav = (manual: number) => {
      btns.forEach((btn) => btn.classList.remove("active"));
      slides.forEach((slide) => slide.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      btns[manual]?.classList.add("active");
      slides[manual]?.classList.add("active");
      contents[manual]?.classList.add("active");
    };

    btns.forEach((btn, i) => {
      const handleBtnClick = () => sliderNav(i);
      btn.addEventListener("click", handleBtnClick);

      // Clean up event listener
      return () => {
        btn.removeEventListener("click", handleBtnClick);
      };
    });

    // Clean up event listeners on component unmount
    return () => {
      menubtn?.removeEventListener("click", handleMenuClick);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Responsive Website Landing Page - With Background Video Slider | Travel</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      
      </Head>
      <header>
        <a href="#" className="brand">Travel</a>
        <div className="menu-btn">
 
</div>


        <div className="navigation">
          <div className="navigation-items">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Explore</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </header>
      <section className="home">
        <video className="video-slide active" src="3094026-uhd_3840_2160_30fps.mp4" autoPlay muted loop></video>
        <video className="video-slide" src="3135807-hd_1920_1080_24fps.mp4" autoPlay muted loop></video>
        <video className="video-slide" src="5379995-uhd_3840_2160_24fps.mp4" autoPlay muted loop></video>
        <video className="video-slide" src="2099568-hd_1920_1080_30fps.mp4" autoPlay muted loop></video>
        <video className="video-slide" src="1623864-hd_1920_1080_25fps.mp4" autoPlay muted loop></video>

        <div className="content active">
          <h1>Wonderful.<br /><span>Island</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>Camping.<br /><span>Enjoy</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>Advantures.<br /><span>Off Road</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>Road Trip.<br /><span>Together</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>Feel Nature.<br /><span>Relax</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#">Read More</a>
        </div>
        <div className="media-icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-facebook"
    >
      <path d="M18 2h-3a4 4 0 00-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
    </svg>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-instagram"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 11-4.24-4.24 4 4 0 014.24 4.24z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-twitter"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  </a>
</div>

        <div className="slider-navigation">
          <div className="nav-btn active"></div>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
        </div>
      </section>
    </>
  );
}
