'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaWordpress,
  FaPhp,
  FaLaravel,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
   SiWebflow,
  SiDotnet,
} from 'react-icons/si'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const technologies = [
    { name: 'Figma', icon: FaFigma },
  { name: 'Git', icon: FaGitAlt },
  { name: 'ASP.NET', icon: SiDotnet },
  { name: 'WordPress', icon: FaWordpress },
  { name: 'Webflow', icon: SiWebflow },
  { name: 'PHP', icon: FaPhp },
  { name: 'Laravel', icon: FaLaravel },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind ', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
]


export default function TechSlider() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl lg:text-6xl font-bold  mb-4">
          Technologies <span className='text-blue'>We Work On</span> 
        </h2>
        <p className="text-gray-600 text-xl ">
          From frontend to backend and everything in between
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
       
        
        pagination={false}
        navigation={false}
        className="px-6"
      >
        {technologies.map((tech, index) => {
          const Icon = tech.icon
          return (
            <SwiperSlide key={index}>
              <div className=" p-3 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 h-32">
                <Icon className="text-4xl text-blue-600 mb-3" />
                <span className="text-gray-700 font-semibold text-sm">
                  {tech.name}
                </span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
