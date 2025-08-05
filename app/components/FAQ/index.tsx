"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h3 className='text-xl font-normal text-white text-center mb-6'>FAQ</h3>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>
                Frequently Asked <br /> Questions
            </h2>
            <div className="w-full px-4 pt-16">
                
                {/* Question 1 */}
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Do you offer custom website design?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Yes, we specialize in creating custom designs tailored to your brand, 
                                    ensuring a unique and user-friendly experience that reflects your vision.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                {/* Question 2 */}
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Do you handle both design and development?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Absolutely! We take care of both design and full-stack development, 
                                    delivering complete solutions from concept to deployment.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                {/* Question 3 */}
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>What industries do you work with?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    We have experience across diverse industries like tech, healthcare, 
                                    e-commerce, education, and more. Our solutions are tailored to your 
                                    specific industry needs.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;
