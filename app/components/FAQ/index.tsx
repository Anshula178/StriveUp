"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
    const faqList = [
  {
    question: "Do you offer custom website design?",
    answer:
      "Yes, we specialize in creating custom designs tailored to your brand, ensuring a unique and user-friendly experience that reflects your vision.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Absolutely! We take care of both design and full-stack development, delivering complete solutions from concept to deployment.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We have experience across diverse industries like tech, healthcare, e-commerce, education, and more. Our solutions are tailored to your specific industry needs.",
  },
];
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
    >
      <h3 className="text-sm sm:text-base font-normal text-white text-center mb-3 sm:mb-6">
        FAQ
      </h3>
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-center text-white leading-snug">
        Frequently Asked <br className="hidden sm:block" /> Questions
      </h2>

      <div className="w-full pt-10 sm:pt-16">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className="mx-auto w-full max-w-3xl sm:max-w-4xl rounded-2xl bg-white py-6 sm:py-8 px-4 sm:px-6 mb-4"
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-2 py-1 sm:py-2 text-left text-lg sm:text-2xl font-medium">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500 transition-transform`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pt-2 pb-1 sm:px-4 sm:pt-4 sm:pb-2 text-sm sm:text-base text-black font-normal opacity-50">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};



export default FAQ;
