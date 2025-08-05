"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  time: string;
  heading: string;
  heading2: string;
  date: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    time: "4 min",
    heading: "Top UI/UX Trends",
    heading2: "Shaping 2025 and Beyond",
    name: "Published on StriveUp Blog",
    date: "July 18, 2025",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "6 min",
    heading: "Building Scalable",
    heading2: "Web Applications with Next.js",
    name: "Published on StriveUp Blog",
    date: "July 14, 2025",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 min",
    heading: "Design Systems",
    heading2: "That Empower Teams",
    name: "Published on StriveUp Blog",
    date: "July 10, 2025",
    imgSrc: "/images/articles/article3.png",
  },
  {
    time: "3 min",
    heading: "The Future of",
    heading2: "Headless CMS Platforms",
    name: "Published on StriveUp Blog",
    date: "July 6, 2025",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "7 min",
    heading: "Mastering Performance",
    heading2: "Optimization for Web",
    name: "Published on StriveUp Blog",
    date: "July 1, 2025",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "4 min",
    heading: "Creative Branding",
    heading2: "For Modern Startups",
    name: "Published on StriveUp Blog",
    date: "June 28, 2025",
    imgSrc: "/images/articles/article3.png",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-lightgrey py-20" id="blog-section">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center mb-10">
            <h3 className="text-blue text-lg font-normal tracking-widest">
              ARTICLES
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold">
              Insights & Inspiration.
            </h3>
            <p className="text-gray-500 mt-4 text-base">
              Stay ahead with our latest thoughts on design, technology, and
              digital strategy.
            </p>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={389}
                    height={262}
                    className="inline-block m-auto"
                  />

                  <Link href="/">
                    <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">
                      {items.time} read
                    </h3>
                  </Link>
                  <h4 className="text-2xl font-bold pt-6 text-black">
                    {items.heading}
                  </h4>
                  <h4 className="text-2xl font-bold pt-1 text-black">
                    {items.heading2}
                  </h4>

                  <div>
                    <h3 className="text-base font-normal pt-6 pb-2 opacity-75">
                      {items.name}
                    </h3>
                    <h3 className="text-base font-normal pb-1 opacity-75">
                      {items.date}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
