"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#f8fbfb]">

      <Sidebar />

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden py-20 md:py-28 md:ml-40 px-5 md:px-0">

        {/* Background Image */}
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact FAB"
          fill
          className="object-cover opacity-15"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />


        {/* Decorative Blurs */}
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-3xl" />

        {/* Background Blur */}
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#0e847b]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-0 md:px-8">

          <div className="grid items-center gap-12 md:gap-20 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <p className="uppercase tracking-[0.5em] font-semibold text-[#0e847b]">
                Contact FAB
              </p>

              <h1 className="mt-6 text-3xl md:text-6xl font-bold leading-tight text-gray-900">

                Let's Build

                <span className="block text-[#0e847b]">
                  Your Financial Future
                </span>

              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg leading-7 md:leading-9 text-gray-600">

                Whether you're buying your dream home,
                looking for business finance, or planning
                long-term investments, our advisors are
                ready to help.

              </p>

              <button className="
mt-8
w-full
md:w-auto
                  rounded-full
                  bg-[#0e847b]
                  px-8
                  py-4
                  text-white
                  font-semibold
                  transition
                  hover:-translate-y-1
                  hover:bg-[#0b6d65]
                "
              >
                Schedule Consultation
              </button>

            </div>

            {/* RIGHT */}

            <div className="relative flex justify-center">

              <Image
                src="/images/contact-team.jpg"
                alt="contact"
                width={520}
                height={650}
                className="w-full max-w-[520px] rounded-[30px] md:rounded-[40px] shadow-2xl object-cover"

              />

              {/* Floating Card */}

              <div
                className="
                  absolute
right-4
bottom-4
md:-right-10
md:-bottom-8
                  rounded-3xl
                  bg-white
                  p-4
                  shadow-2xl
                  transition
                  hover:-translate-y-2
                "
              >

                <Phone className="text-[#0e847b]" />

                <p className="mt-3 text-sm text-gray-500">
                  Call Anytime
                </p>

                <h3 className="mt-1 font-bold">
                  +971 54 232 1423
                </h3>

              </div>



            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* CONTACT CARDS */}
      {/* ================================================= */}

      <section className="py-16 md:py-20 md:ml-40 px-5 md:px-0">

        <div className="mx-auto max-w-7xl px-0 md:px-8">

          <div className="text-center">

            <p className="uppercase tracking-[0.4em] text-[#0e847b] font-semibold">
              Get In Touch
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">

              Reach us through your preferred communication
              channel and one of our financial specialists
              will get back to you promptly.

            </p>

          </div>
<div className="mt-12 md:mt-16 grid gap-6 md:gap-8 lg:grid-cols-3">

            {/* CARD */}

            {[
              {
                icon: <Phone size={34} />,
                title: "Call Us",
                value: "+971 54 232 1423",
                desc: "Mon - Sat | 9 AM - 9 PM",
              },
              {
                icon: <Mail size={34} />,
                title: "Email",
                value: "fabfinancialbroker@gmail.com",
                desc: "Response within 24 hours",
              },
              {
                icon: <MapPin size={34} />,
                title: "Office",
                value: "Office 1104, Al Fattan Office Tower, Business Hub, Dubai Marina P.O. Box 48395",
                desc: "Dubai, UAE",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[35px]
                  bg-white
                  p-6 
                  md:p-8
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-4
                  hover:shadow-2xl
                "
              >

                <div
                  className="
                    flex
                 h-14
w-14
md:h-16
md:w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#0e847b]/10
                    text-[#0e847b]
                    transition
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                >
                  {item.icon}
                </div>

                <h3 className="mt-8 text-xl md:text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 font-semibold text-[#0e847b]">
                  {item.value}
                </p>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.desc}
                </p>

                <ArrowRight
                  className="
                    mt-8
                    text-[#0e847b]
                    transition
                    duration-500
                    group-hover:translate-x-2
                  "
                />

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ================================================= */}
      {/* CONTACT FORM + PROCESS */}
      {/* ================================================= */}

      <section className="relative overflow-hidden py-16 md:py-24 md:ml-40 px-5 md:px-0">

        {/* Background Glow */}
        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-0 md:px-8">

          <div className="grid gap-12 md:gap-16 lg:grid-cols-2">

            {/* ================================================= */}
            {/* CONTACT FORM */}
            {/* ================================================= */}

            <div>

              <p className="uppercase tracking-[0.4em] text-[#0e847b] font-semibold">
                Send a Message
              </p>

              <h2 className="mt-5 text-3xl md:text-5xl font-bold">
                Let's Talk About
                <br />
                Your Goals
              </h2>

              <p className="mt-6 max-w-xl text-base md:text-lg leading-7 md:leading-8">
                Fill in the form below and one of our financial
                specialists will contact you shortly.
              </p>

              <div className="relative mt-12 overflow-hidden rounded-[40px] p-[2px] beam-card">

                <div className="beam absolute inset-0"></div>

                <div className="relative z-10 rounded-[38px] bg-white p-6 md:p-10">

                  <form className="space-y-6">

                    <div>

                      <label className="mb-2 block font-medium text-gray-700">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-gray-200
                          px-5
                          py-4
                          outline-none
                          transition
                          focus:border-[#0e847b]
                        "
                      />

                    </div>

                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">

                      <div>

                        <label className="mb-2 block font-medium text-gray-700">
                          Email
                        </label>

                        <input
                          type="email"
                          placeholder="john@email.com"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            py-4
                            outline-none
                            focus:border-[#0e847b]
                          "
                        />

                      </div>

                      <div>

                        <label className="mb-2 block font-medium text-gray-700">
                          Phone
                        </label>

                        <input
                          type="text"
                          placeholder="+971 XX XXX XXXX"
                          className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            px-5
                            py-4
                            outline-none
                            focus:border-[#0e847b]
                          "
                        />

                      </div>

                    </div>

                    <div>

                      <label className="mb-2 block font-medium text-gray-700">
                        Service
                      </label>

                      <select
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-gray-200
                          px-5
                          py-4
                          outline-none
                          focus:border-[#0e847b]
                        "
                      >

                        <option>Mortgages</option>
                        <option>Business Finance</option>
                        <option>Golden Visa</option>
                        <option>Financial Advisory</option>

                      </select>

                    </div>

                    <div>

                      <label className="mb-2 block font-medium text-gray-700">
                        Message
                      </label>

                      <textarea
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-gray-200
                          px-5
                          py-4
                          outline-none
                          resize-none
                          focus:border-[#0e847b]
                        "
                      />

                    </div>

                    <button
                   className="
                        group
                        flex
                        w-full
                        md:w-auto
                        justify-center
                        items-center
                        gap-3
                        rounded-full
                        bg-[#0e847b]
                        px-8
                        py-4
                        font-semibold
                        text-white
                        transition
                        hover:scale-105
                        hover:bg-[#0b6d65]
                      "
                    >
                      Send Message

                      <ArrowRight
                        className="
                          transition
                          group-hover:translate-x-2
                        "
                      />

                    </button>

                  </form>

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* HOW WE WORK */}
            {/* ================================================= */}

            <div>

              <p className="uppercase tracking-[0.4em] text-[#0e847b] font-semibold">
                Our Process
              </p>

              <h2 className="mt-5 text-5xl font-bold text-gray-900">
                How We Help
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
                From your first enquiry to final approval,
                we guide you through every stage with
                transparency and expert advice.
              </p>

              <div className="relative mt-14">

                {/* Vertical Line */}

                <div className="absolute left-6 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-[#0e847b] via-[#14b8a6] to-yellow-300" />

                {[
                  {
                    title: "Contact Us",
                    desc: "Share your financial goals and requirements.",
                    icon: "💬",
                  },
                  {
                    title: "Free Consultation",
                    desc: "Discuss available financial solutions.",
                    icon: "🤝",
                  },
                  {
                    title: "Document Review",
                    desc: "We verify your documents and eligibility.",
                    icon: "📄",
                  },
                  {
                    title: "Bank Submission",
                    desc: "Applications submitted to trusted banks.",
                    icon: "🏦",
                  },
                  {
                    title: "Approval",
                    desc: "Congratulations! Your journey begins.",
                    icon: "🎉",
                  },
                ].map((step, index) => (

                  <div
                    key={index}
                    className="
                      group
                      relative
                      mb-10
                      ml-12 
                      md:ml-16
                      rounded-3xl
                      bg-white
                      p-5
                       md:p-7
                      shadow-lg
                      transition
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-2xl
                    "
                  >

                    {/* Timeline Dot */}

                    <div
                      className="
                        absolute
                        -left-[42px]
md:-left-[52px]
                        top-8
                        flex
                        h-10
w-10
md:h-12
md:w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0e847b]
                        text-xl
                        shadow-lg
                        transition
                        duration-500
                        group-hover:scale-110
                      "
                    >
                      {step.icon}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#0e847b]">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 md:leading-8 text-gray-600">
                      {step.desc}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>




      <Footer />
    </main>
  )
}