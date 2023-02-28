"use client"

import NewsLatterBox from "./NewsLatterBox";

import { httpsCallable } from "firebase/functions";
import { useEffect } from "react";
import { useState } from "react";
import { functions } from "@/utils/firebase";
import { validateEmail } from "@/utils/formatters";


const Contact = () => {

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async() => {
    if(name && email && message && validateEmail(email)) {
      const sendContactFormFunction = httpsCallable(functions, "sendContactForm");
      setIsLoading(true);
      await sendContactFormFunction({
        name: name,
        email: email,
        message: message
      })
        .then((result) => {
          // Read result of the Cloud Function.
          /** @type {any} */
          setEmail("");
          setName("");
          setIsLoading(false);
          setIsSuccessful(true);
        })
        .catch((error) => {
          // Getting the Error details.
          const code = error.code;
          const message = error.message;
          const details = error.details;
          console.log(code, message, details);
          setIsLoading(false);
        });
    }
  }


  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Contact Us!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows="5"
                      placeholder="Enter your Message"
                      className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button
                    onClick={handleSend}
                    className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                  >
                    {isLoading ? "Sending...":"Send"}
                  </button>
                </div>
                {isSuccessful ? (
                  <div>
                    <p className="mt-4 px-4 text-sm font-light text-dark dark:text-white">Your message has been saved!</p>
                  </div>
                ):null}
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
