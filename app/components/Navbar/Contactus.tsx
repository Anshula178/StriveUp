"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contactusform = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
      setStatus("Sending...");
      setSubmitting(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          setStatus("Message sent successfully!");
          resetForm();
          setTimeout(() => setIsOpen(false), 2000); 
        } else {
          setStatus("Failed to send message.");
        }
      } catch {
        setStatus("An error occurred.");
      }
      setSubmitting(false);
    },
  });

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-btnblue  hover:text-white"
            onClick={openModal}
          >
            Contact Us
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-3" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center mt-[70px]">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all z-30">
                  <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                    <div className="flex flex-shrink-0 items-center justify-center">
                      <Link
                        href="/"
                        className="text-2xl sm:text-4xl font-semibold text-black"
                      >
                        Strive<span className="text-blue">Up</span>
                      </Link>
                    </div>
                    <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                      Contact us now? Want to send us a feedback?
                    </p>

                    {/* Formik Form */}
                    <form
                      className="space-y-8"
                      onSubmit={formik.handleSubmit}
                    >
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          className="relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Name..."
                        />
                        {formik.touched.name && formik.errors.name && (
                          <p className="text-red text-sm mt-1">
                            {formik.errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className="relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="xyz@email.com"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="text-red text-sm mt-1">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.message}
                          className="relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Leave a comment..."
                        ></textarea>
                        {formik.touched.message && formik.errors.message && (
                          <p className="text-red text-sm mt-1">
                            {formik.errors.message}
                          </p>
                        )}
                      </div>

                      {/* Button */}
                      <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className={`py-3 px-5 text-sm font-medium w-full text-center text-white rounded-lg transition
                        ${
                          formik.isSubmitting
                            ? "bg-blue-300 cursor-not-allowed"
                            : "bg-blue hover:bg-blue-600"
                        }`}
                      >
                        {formik.isSubmitting ? "Sending..." : "Send message"}
                      </button>

                      {/* Status */}
                      {formik.status && (
                        <p className="text-center text-sm mt-4 text-gray-600">
                          {formik.status}
                        </p>
                      )}
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contactusform;
