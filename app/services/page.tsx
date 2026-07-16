"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function ServicesPage() {

    const services = [
        {
            title: "Mortgages",
            image: "/images/mortgage.jpg",
            desc:
                "Find the right mortgage solution with competitive rates from trusted UAE banks. We guide you through eligibility, approval, and documentation."
        },
        {
            title: "Business Finance",
            image: "/images/business.jpg",
            desc:
                "Flexible business financing solutions designed to support growth, working capital needs, and expansion plans."
        },
        {
            title: "UAE Golden Visa",
            image: "/images/goldenvisa.webp",
            desc:
                "Professional guidance for investors and individuals seeking UAE Golden Visa solutions through eligible investments."
        },
        {
            title: "Financial Advisory",
            image: "/images/advisory.jpg",
            desc:
                "Strategic financial advice to help you make informed borrowing, investment, and planning decisions."
        }
    ];


    return (

        <main className="bg-[#f8fbfb]">

            <Sidebar />


            {/* HERO */}

            <section className="relative overflow-hidden py-28 px-8">

     {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />

                

                {/* Decorative Blurs */}
                <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />

                <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-3xl" />



                <div className="relative z-10 ml-40 max-w-6xl">


                    <p className="
                    uppercase
                    tracking-[0.4em]
                    text-[#0e847b]
                    font-semibold
                    ">
                        Our Services
                    </p>


                    <h1 className="
                    mt-6
                    text-5xl
                    font-bold
                    text-gray-900
                    ">
                        Financial Solutions
                        <br />
                        Designed Around You
                    </h1>


                    <p className="
                    mt-8
                    max-w-3xl
                    text-lg
                    leading-8
                    text-gray-600
                    ">
                        From home financing to business growth,
                        FAB provides expert financial solutions
                        built around your goals.
                    </p>


                </div>


            </section>




            {/* SERVICES */}

            <section className="px-8 py-20 ml-40">


                <div className="mx-auto max-w-6xl">


                    <div className="
                    grid
                    gap-10
                    md:grid-cols-2
                    ">


                        {services.map((service, index) => (


                            <div
                                key={index}
                                className="
                                group
                                overflow-hidden
                                rounded-[35px]
                                bg-white
                                shadow-lg
                                transition
                                duration-500
                                hover:-translate-y-3
                                hover:shadow-2xl
                                "
                            >


                                {/* IMAGE */}

                                <div className="overflow-hidden">


                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={600}
                                        height={350}
                                        className="
                                        h-64
                                        w-full
                                        object-cover
                                        transition
                                        duration-700
                                        group-hover:scale-110
                                        "
                                    />


                                </div>




                                {/* CONTENT */}

                                <div className="p-8">


                                    <h2 className="
                                    text-3xl
                                    font-bold
                                    text-[#0e847b]
                                    ">
                                        {service.title}
                                    </h2>


                                    <p className="
                                    mt-5
                                    leading-8
                                    text-gray-600
                                    ">
                                        {service.desc}
                                    </p>



                                    <button className="
                                    mt-8
                                    rounded-full
                                    bg-[#0e847b]
                                    px-6
                                    py-3
                                    text-white
                                    transition
                                    hover:bg-[#095f59]
                                    ">
                                        Learn More →
                                    </button>


                                </div>


                            </div>


                        ))}


                    </div>


                </div>


            </section>





          {/* WHY SERVICES */}
<section className="relative overflow-hidden bg-[#0b1f1d] ml-35 mx-10 py-24 text-white rounded-[40px]">

    {/* Background Glow */}
    <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#0e847b]/30 blur-3xl" />

    <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

    <div className="relative mx-auto max-w-6xl px-6 text-center">

        <p className="uppercase tracking-[0.5em] text-[#14b8a6] font-semibold">
            WHY FAB SERVICES
        </p>

        <h2 className="mt-5 text-4xl font-bold">
            Why Choose Our Services?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
            Every financial journey is unique. We combine industry expertise,
            trusted banking relationships, and personalized guidance to help
            you achieve your goals with confidence.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
                {
                    number: "01",
                    title: "Trusted Banking Partners",
                    desc: "Access a wide network of leading UAE banks offering competitive financial solutions."
                },
                {
                    number: "02",
                    title: "Transparent Process",
                    desc: "Clear communication, honest advice, and complete transparency at every stage."
                },
                {
                    number: "03",
                    title: "Expert Guidance",
                    desc: "Dedicated financial specialists helping you make informed decisions with confidence."
                }

            ].map((item, index) => (

                <div
                    key={index}
                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-[35px]
                        border
                        border-white/10
                        bg-white/10
                        p-8
                        text-left
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        hover:-translate-y-4
                        hover:bg-white/15
                    "
                >

                    {/* Huge Background Number */}
                    <span
                        className="
                            absolute
                            -right-6
                            -top-10
                            text-[120px]
                            font-bold
                            text-white/5
                            transition-all
                            duration-500
                            group-hover:text-[#0e847b]/20
                        "
                    >
                        {item.number}
                    </span>

                    {/* Number Badge */}
                    <div
                        className="
                            relative
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#0e847b]
                            font-bold
                            transition
                            duration-500
                            group-hover:scale-110
                            group-hover:rotate-6
                        "
                    >
                        {item.number}
                    </div>

                    <h3 className="mt-8 text-2xl font-bold">
                        {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-300">
                        {item.desc}
                    </p>

                    {/* Animated Line */}
                    <div
                        className="
                            mt-8
                            h-[3px]
                            w-0
                            rounded-full
                            bg-[#14b8a6]
                            transition-all
                            duration-500
                            group-hover:w-full
                        "
                    />

                </div>

            ))}

        </div>

    </div>

</section>


            <section className="ml-20 my-20 px-8">
                <div
                    className="
                        relative
                        overflow-hidden
                        mx-auto
                        max-w-5xl
                        rounded-[40px]
                        bg-[#0e847b]
                        p-14
                        text-center
                        text-white
                        "
                >
                    {/* Animated Diamonds */}

                    <div
                        className="
        absolute
        top-0
        right-0
        h-14
        w-14
        rotate-45
        rounded-md
        border-2
        border-white/30
        animate-pulse
      "
                    />

                    <div
                        className="
        absolute
        top-20
        right-12
        h-8
        w-8
        rotate-45
        rounded
        bg-white/15
        animate-bounce
      "
                        style={{ animationDuration: "4s" }}
                    />

                    <div
                        className="
        absolute
        top-2
        right-24
        h-5
        w-5
        rotate-45
        bg-white/25
      "
                    />
                    {/* Mortgage Graph */}
                    <div className="absolute top-4 right-20 opacity-20 pointer-events-none">
                        <svg
                            width="460"
                            height="350"
                            viewBox="0 0 260 150"
                            fill="none"
                        >
                            {/* Grid */}
                            <path d="M0 30H260" stroke="white" strokeOpacity=".15" />
                            <path d="M0 70H260" stroke="white" strokeOpacity=".15" />
                            <path d="M0 110H260" stroke="white" strokeOpacity=".15" />

                            <path d="M40 0V150" stroke="white" strokeOpacity=".15" />
                            <path d="M100 0V150" stroke="white" strokeOpacity=".15" />
                            <path d="M160 0V150" stroke="white" strokeOpacity=".15" />
                            <path d="M220 0V150" stroke="white" strokeOpacity=".15" />

                            {/* Graph */}
                            <path
                                className="graph-line"
                                d="M10 120
         C45 110 60 85 90 90
         C120 95 145 40 180 55
         C210 68 225 25 250 18"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                fill="none"
                            />

                            {/* Data points */}
                            <circle cx="10" cy="120" r="4" fill="white" />
                            <circle cx="90" cy="90" r="4" fill="white" />
                            <circle cx="180" cy="55" r="4" fill="white" />
                            <circle cx="250" cy="18" r="5" fill="white" />
                        </svg>
                    </div>

                    {/* Glow */}
                    <div
                        className="
        absolute
        -right-32
        -top-32
        h-72
        w-72
        rounded-full
        bg-white/10
        blur-3xl
      "
                    />

                {/* Animated Diamonds */}

                    <div
                        className="
        absolute
        bottom-0
        left-0
        h-14
        w-14
        rotate-45
        rounded-md
        border-2
        border-white/30
        animate-pulse
      "
                    />

                    <div
                        className="
        absolute
        bottom-20
        left-12
        h-8
        w-8
        rotate-45
        rounded
        bg-white/15
        animate-bounce
      "
                        style={{ animationDuration: "4s" }}
                    />

                    <div
                        className="
        absolute
        bottom-2
        left-24
        h-5
        w-5
        rotate-45
        bg-white/25
      "
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold">
                            Ready To Plan Your Future?
                        </h2>

                        <p className="mt-5 text-lg text-white/90">
                            Calculate your mortgage eligibility today.
                        </p>

                        <a
                            href="/mortgage-calculator"
                            className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-white
          px-8
          py-4
          font-semibold
          text-[#0e847b]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-2xl
        "
                        >
                            Calculate Mortgage →
                        </a>
                    </div>
                </div>
            </section>



            <Footer />


        </main>

    );
}