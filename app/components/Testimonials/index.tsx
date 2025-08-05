"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int. Ltd",
    comment:
      "The team exceeded our expectations with attention to detail and flawless execution. Our website now offers a truly seamless user experience.",
    imgSrc: "/images/testimonial/user1.svg",
  },
  {
    name: "Leslie Alexander",
    profession: "Marketing Director, BrightTech",
    comment:
      "Their design and development expertise were exceptional. They helped us launch faster with a modern, scalable product that impressed everyone.",
    imgSrc: "/images/testimonial/user2.svg",
  },
  {
    name: "Cody Fisher",
    profession: "Founder, StartUp Hub",
    comment:
      "They combine creativity with technical precision like few others. Our ideas transformed into a polished, future-ready solution that truly works.",
    imgSrc: "/images/testimonial/user3.svg",
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int. Ltd",
    comment:
      "The entire process was smooth, transparent, and highly efficient. We felt supported at every step, from concept to the final product.",
    imgSrc: "/images/testimonial/user1.svg",
  },
  {
    name: "Leslie Alexander",
    profession: "Marketing Director, BrightTech",
    comment:
      "Outstanding collaboration and quality work! Their team turned our vision into a product that feels modern, intuitive, and perfectly designed.",
    imgSrc: "/images/testimonial/user2.svg",
  },
  {
    name: "Cody Fisher",
    profession: "Founder, StartUp Hub",
    comment:
      "We were impressed by their ability to blend user-focused design with clean, scalable code. Their work exceeded our expectations completely.",
    imgSrc: "/images/testimonial/user3.svg",
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
            autoplay: true,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial quote-icon pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what others are saying.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
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
