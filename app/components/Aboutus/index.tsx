"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionBlock from "./SectionBlock";

interface ServiceItem {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
    bullets?: string[];
}

const services: Record<string, ServiceItem[]> = {
   "Development": [
    {
      heading: "PHP Development",
      imgSrc: "/images/aboutus/php.png",
      paragraph: "StriveUp’s PHP developers build robust backend solutions for every business need.",
      link: "Start a Project",
      bullets: [
        "Robust backend architecture with PHP",
        "Custom CMS and web application solutions",
        "Framework expertise in Laravel & CodeIgniter",
        "Fast turnaround with clean, secure code",
        "Database integration and REST API support",
      ],
    },
    {
      heading: "ASP.NET Development",
      imgSrc: "/images/aboutus/dotnet.png",
      paragraph: "ASP.NET developers at StriveUp create enterprise-grade and scalable applications.",
      link: "Start a Project",
      bullets: [
        "Enterprise web apps with C# and .NET Core",
        "Integration with SharePoint, Dynamics, and CRM",
        "Secure, scalable, and high-performance builds",
        "Custom workflows and dashboard modules",
        "Maintenance and long-term support available",
      ],
    },
    {
  heading: "MERN / MEAN Stack ",
  imgSrc: "/images/aboutus/mean-mern.png",
  paragraph: "Build scalable and dynamic full-stack web apps using the power of JavaScript with MERN or MEAN architecture.",
  link: "Start a Project",
  bullets: [
    "Frontend with React (MERN) or Angular (MEAN)",
    "Robust REST APIs using Express.js and Node.js",
    "Flexible NoSQL database with MongoDB",
    "Reusable components and modular architecture",
    "Ideal for SaaS, dashboards, and enterprise tools",
  ],
},
{
  heading: "WordPress Development",
  imgSrc: "/images/aboutus/wordpress.png",
  paragraph: "We create scalable, custom WordPress sites tailored to your needs.",
  link: "Start a Project",
  bullets: [
    "Custom themes and plugin development",
    "Elementor, Gutenberg, or classic editor support",
    "WooCommerce setup and integration",
    "SEO optimization and page speed tuning",
    "Easy content management for non-tech users",
  ],
},
{
  heading: "Mobile App Development",
  imgSrc: "/images/aboutus/ios.png",
  paragraph: "Crafting intuitive and high-performance mobile apps for iOS, Android, and cross-platform solutions.",
  link: "Start a Project",
  bullets: [
    "Native iOS (Swift) and Android (Kotlin) development",
    "Cross-platform with Flutter or React Native",
    "Custom UI/UX tailored for mobile experiences",
    "API integration and secure backend connectivity",
    "App Store & Google Play deployment and support",
  ],
},
{
  heading: "Webflow Development",
  imgSrc: "/images/aboutus/webflow.png",
  paragraph: "Craft visually stunning, responsive websites in Webflow — with powerful CMS and seamless animations built in.",
  link: "Start a Project",
  bullets: [
    "Custom Webflow builds tailored to your brand",
    "Advanced CMS configurations for dynamic content",
    "Pixel-perfect implementation from Figma to Webflow",
    "Smooth animations and interactions without code",
    "SEO-friendly, fast, and scalable Webflow sites",
  ],
}




  ],
  "Design": [
    {
      heading: "Parallax Web Design",
      imgSrc: "/images/aboutus/parallax.png",
      paragraph: "We are one of the best Parallax Web Companies in Chandigarh, India.",
      link: "Start a Project",
      bullets: [
        "Creates immersive and layered scrolling effects",
        "Enhances storytelling through dynamic visuals",
        "Improves time-on-site and user interaction",
        "Ideal for agencies, portfolios, and brands",
        "Optimized for performance on modern devices",
      ],
    },
    {
      heading: "Responsive Design",
      imgSrc: "/images/aboutus/responsive-design.png",
      paragraph: "We build websites at StriveUp that are responsive and fast-loading.",
      link: "Start a Project",
      bullets: [
        "Adapts seamlessly to all screen sizes",
        "Improves user experience across devices",
        "Faster load times for better engagement",
        "Boosts mobile SEO and visibility",
        "Tested for cross-browser compatibility",
      ],
    },
    {
      heading: "Custom Web Design",
      imgSrc: "/images/aboutus/web-design.png",
      paragraph: "We design the most suited, user-centric, and goal-oriented custom websites.",
      link: "Start a Project",
      bullets: [
        "Tailored design for your brand identity",
        "User-first UI/UX principles",
        "Conversion-focused layouts",
        "Built to align with business goals",
        "Scalable for future feature additions",
      ],
    },
    {
  heading: "UI/UX Design",
  imgSrc: "/images/aboutus/ui-ux.png",
  paragraph: "We craft user experiences that convert and interfaces that engage.",
  link: "Start a Project",
  bullets: [
    "User journey mapping and persona research",
    "Wireframes, prototypes, and user testing",
    "Pixel-perfect UI designs with Figma/Adobe XD",
    "Mobile-first, accessible design approach",
    "Boosts engagement and reduces bounce rate",
  ],
},
{
  heading: "Landing Page Design",
  imgSrc: "/images/aboutus/landing-page.png",
  paragraph: "High-converting landing pages built for lead generation and product launches.",
  link: "Start a Project",
  bullets: [
    "Focused layouts for conversions",
    "A/B tested CTAs and messaging",
    "Optimized loading and page speed",
    "SEO-friendly and mobile responsive",
    "Ideal for campaigns and paid ads",
  ],
},
{
  heading: "eCommerce Design",
  imgSrc: "/images/aboutus/ecom.png",
  paragraph: "Modern and intuitive designs tailored for online shopping experiences.",
  link: "Start a Project",
  bullets: [
    "UX-optimized product and checkout flows",
    "Supports Shopify, WooCommerce, Magento",
    "Responsive catalog and cart interfaces",
    "Custom branding for your store",
    "Integrated trust signals and review systems",
  ],
},

  ],
 
};



const Aboutus = () => {
  // const categories = Object.keys(services);
  // const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
  <div id="service-section">
      <div className="mx-auto max-w-7xl px-4 py-24 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />

        <h3 className="text-center text-blue text-lg tracking-widest">SERVICES</h3>
        <h4 className="text-center mx-auto max-w-4xl text-4xl lg:text-6xl font-bold">
          From UX to code, we create solutions that transform brands
        </h4>

        {/* Show all service blocks without filtering */}
        <div className="space-y-16 mt-16">
          {Object.entries(services).map(([category, data]) => (
            <SectionBlock key={category} title={category} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

  

export default Aboutus;
