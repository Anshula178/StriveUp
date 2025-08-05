"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface ServiceItem {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
  bullets?: string[];
}

interface SectionBlockProps {
  title: string;
  data: ServiceItem[];
}

const SectionBlock: React.FC<SectionBlockProps> = ({ title, data }) => {
  // const [showAll, setShowAll] = useState(false);

  // const itemsToShow = showAll ? data : data.slice(0, 3);

  return (
    <div className="my-16">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
          <span className="text-black">Web </span><span className="text-blue">{title}</span>
        </h3>
        {/* <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue border border-blue px-4 py-2 rounded-full font-bold text-sm hover:bg-blue hover:text-white transition-all"
        >
          {showAll ? "SHOW LESS" : "VIEW ALL"}
        </button> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-8">
        {data.map((item, i) => (
        <div key={i} className="group [perspective:1000px] h-96 w-full">
  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
    {/* Front Face */}
    <div className="absolute inset-0 z-10 bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between [backface-visibility:hidden] transition-colors">
      {/* Hover this part to flip */}
      <div>
        <h4 className="text-2xl font-semibold text-black mb-4">
          {item.heading}
        </h4>
        <Image
          src={item.imgSrc}
          alt={item.heading}
          width={100}
          height={100}
          className="mb-4"
        />
        <p className="text-gray-600 text-base ">{item.paragraph}</p>
      </div>

      {/* Optional link */}
       <Link
        href=""
        className="text-blue mt-4 text-sm font-medium flex items-center gap-1 absolute bottom-[27px]"
      >
        {item.link}
        <ChevronRightIcon width={16} height={16} />
      </Link> 
    </div>

    {/* Back Face */}
    <div className="absolute inset-0 z-20 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white rounded-3xl border border-black shadow-md p-6 flex flex-col justify-start text-blue-700">
      <h4 className="text-2xl font-bold mb-4">{item.heading}</h4>
      <div>
        {item.bullets && item.bullets.length > 0 ? (
        <ul className="list-disc list-inside space-y-1 pl-1 text-base leading-normal">
          {item.bullets.map((bullet, index) => (
            <li key={index} className="ml-3 indent-[-19px]">{bullet}</li>
            
          ))}
           </ul>
      ) : (
        <p className="text-blue-600 text-sm">More details coming soon...</p>
      )}
      </div>
          <Link
        href=""
        className="text-blue mt-4 text-sm font-medium flex items-center gap-1 absolute bottom-[27px]"
      >
        {item.link}
        <ChevronRightIcon width={16} height={16} />
      </Link> 
       
    </div>

  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default SectionBlock;
