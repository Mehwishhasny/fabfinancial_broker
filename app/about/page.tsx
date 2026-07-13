"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function AboutPage() {

    const [active, setActive] = useState(0);


    const testimonials = [
        {
            quote:
                "The team guided us through every step of buying our first home. The mortgage process felt simple and transparent.",
            name: "Ahmed Malik",
            role: "First-time Home Buyer",
            initials: "AM",
        },
        {
            quote:
                "Their mortgage advice helped us choose the right plan and save money in the long run. Highly recommended.",
            name: "Sarah Khan",
            role: "Property Investor",
            initials: "SK",
        },
        {
            quote:
                "Fast responses, expert guidance, and a smooth approval process. We finally found confidence to purchase our dream home.",
            name: "Ryan Hassan",
            role: "Home Owner",
            initials: "RH",
        }
    ];

    return (
        <main className="bg-[#f8fbfb] flex flex-col">

            <Sidebar />

            {/* Hero */}
            <section className="relative overflow-hidden px-8 py-28">

 {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />

                {/* Decorative Blurs */}
                <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />

                <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-6xl ml-40">

                    <p className="uppercase tracking-[0.4em] text-[#0e847b] font-semibold">
                        About FAB
                    </p>

                    <h1 className="mt-6 max-w-4xl text-5xl font-bold text-gray-900">
                        Your Trusted Partner in Financial Success
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                        At Financial Broker (FAB), we simplify financial decisions
                        with expert guidance and tailored financial solutions across UAE.
                    </p>

                </div>

            </section>



            {/* Who We Are */}
            <section className="bg-white px-8 py-20 ml-40">

                <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 items-center">


                    {/* LEFT IMAGE */}
                    <div className="relative">

                        <div className="
                absolute 
                -left-5 
                -top-5 
                h-full 
                w-full 
                rounded-[40px] 
                border-2 
                border-[#0e847b]
            ">
                        </div>


                        <Image
                            src="/images/whyus.jpg"
                            alt="FAB team"
                            width={300}
                            height={300}
                            className="
                    relative
                    h-[300px]
                    w-full
                    rounded-[40px]
                    object-cover
                    shadow-xl
                "
                        />

                    </div>



                    {/* RIGHT CONTENT */}
                    <div>


                        <h2 className="text-3xl font-bold text-gray-900">
                            Who Are We
                        </h2>


                        <p className="mt-6 text-md leading-8 text-gray-600">
                            Financial decisions can be complex. Our mission is to
                            make them simple by providing expert guidance,
                            personalized strategies, and access to reliable
                            financial products.
                        </p>


                        <p className="mt-5 text-md leading-8 text-gray-600">
                            Whether you are purchasing your first home, expanding
                            your business, or planning your financial future, our
                            team works closely with you to find solutions aligned
                            with your goals.
                        </p>



                        {/* Stats */}
                        <div className="
                mt-10
                rounded-[40px]
                bg-[#0e847b]/10
                p-8
            ">

                            <div className="grid grid-cols-2 gap-8">


                                <div>
                                    <h3 className="text-3xl font-bold text-[#0e847b]">
                                        500+
                                    </h3>
                                    <p className="mt-2 text-gray-700">
                                        Happy Clients
                                    </p>
                                </div>



                                <div>
                                    <h3 className="text-3xl font-bold text-[#0e847b]">
                                        10+
                                    </h3>
                                    <p className="mt-2 text-gray-700">
                                        Banking Partners
                                    </p>
                                </div>



                                <div>
                                    <h3 className="text-3xl font-bold text-[#0e847b]">
                                        100%
                                    </h3>
                                    <p className="mt-2 text-gray-700">
                                        Transparent Advice
                                    </p>
                                </div>



                                <div>
                                    <h3 className="text-3xl font-bold text-[#0e847b]">
                                        UAE
                                    </h3>
                                    <p className="mt-2 text-gray-700">
                                        Financial Experts
                                    </p>
                                </div>


                            </div>

                        </div>


                    </div>


                </div>

            </section>



            {/* Mission Vision */}
           {/* Mission Vision */}
<section className="px-8 py-20 ml-40">

    <div className="mx-auto max-w-6xl">

        <div className="text-center mb-14">

            <p className="uppercase tracking-[0.4em] text-[#0e847b] font-semibold">
                Our Foundation
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
                Our Mission & Vision
            </h2>

        </div>



        <div className="grid gap-10 md:grid-cols-2">


            {/* Mission */}
            <div className="relative overflow-hidden rounded-3xl p-[2px] beam-card">


                {/* Moving Beam */}
                <div className="beam absolute inset-0"></div>


                {/* Card */}
                <div className="
                    relative 
                    z-10
                    rounded-[22px]
                    bg-white
                    p-10
                    h-full
                ">

                    <div className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#0e847b]/10
                        text-2xl
                    ">
                        🎯
                    </div>


                    <h3 className="
                        mt-6
                        text-3xl
                        font-bold
                        text-[#0e847b]
                    ">
                        Our Mission
                    </h3>


                    <p className="
                        mt-5
                        leading-8
                        text-gray-600
                    ">
                        To empower individuals and businesses with
                        transparent financial guidance, smart solutions,
                        and expert support that helps them achieve
                        long-term success.
                    </p>


                </div>

            </div>





            {/* Vision */}
            <div className="relative overflow-hidden rounded-3xl p-[2px] beam-card">


                {/* Moving Beam */}
                <div className="beam absolute inset-0"></div>


                {/* Card */}
                <div className="
                    relative
                    z-10
                    rounded-[22px]
                    bg-white
                    p-10
                    h-full
                ">


                    <div className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#0e847b]/10
                        text-2xl
                    ">
                        🚀
                    </div>


                    <h3 className="
                        mt-6
                        text-3xl
                        font-bold
                        text-[#0e847b]
                    ">
                        Our Vision
                    </h3>


                    <p className="
                        mt-5
                        leading-8
                        text-gray-600
                    ">
                        To become one of the UAE's most trusted financial
                        partners by delivering excellence, innovation,
                        and customer-focused financial experiences.
                    </p>


                </div>


            </div>


        </div>

    </div>

</section>


           {/* Why Choose Us */}
<section className="relative overflow-hidden bg-[#0b1f1d] ml-35 mx-10 py-24 text-white">

    {/* Decorative circles */}
    <div className="
        absolute 
        -top-40 
        -right-40 
        h-96 
        w-96 
        rounded-full 
        bg-[#0e847b]/30 
        blur-3xl
    " />

    <div className="
        absolute 
        bottom-0 
        -left-40 
        h-86 
        w-86 
        rounded-full 
        bg-yellow-400/10 
        blur-3xl
    " />


    <div className="relative mx-auto max-w-6xl px-6 text-center">


        <p className="
            uppercase 
            tracking-[0.5em] 
            text-[#14b8a6]
            font-semibold
        ">
            Why Choose FAB
        </p>


        <h2 className="
            mt-5 
            text-3xl 
            font-bold
        ">
            Built Around Your Financial Goals
        </h2>


        <p className="
            mx-auto
            mt-6
            max-w-2xl
            text-gray-300
            leading-8
        ">
            We don't just provide financial products. We create
            strategies that help you move confidently toward your future.
        </p>



        <div className="
            mt-10
            grid
            gap-5
            md:grid-cols-3
        ">


            {[
                {
                    number:"01",
                    title:"Expert Guidance",
                    desc:"From your first consultation to final approval, our experts guide every decision."
                },
                {
                    number:"02",
                    title:"Personal Approach",
                    desc:"Every client receives solutions designed around their financial situation."
                },
                {
                    number:"03",
                    title:"Strong Partnerships",
                    desc:"We connect you with trusted banking networks across the UAE."
                }

            ].map((item,index)=>(


                <div
                    key={index}
                    className="
                    group
                    relative
                    h-[300px]
                    overflow-hidden
                    rounded-[35px]
                    border
                    border-white/10
                    bg-white/20
                    p-8
                    text-left
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-4
                    hover:bg-white/10
                    "
                >


                    {/* Background Number */}
                    <span className="
                        absolute
                        -right-5
                        -top-10
                        text-[120px]
                        font-bold
                        text-white/5
                        transition
                        duration-500
                        group-hover:text-[#0e847b]/20
                    ">
                        {item.number}
                    </span>



                    {/* Content */}
                    <div className="
                        relative
                        z-10
                    ">


                        <div className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#0e847b]
                            text-lg
                            font-bold
                            transition
                            duration-500
                            group-hover:scale-110
                        ">
                            {item.number}
                        </div>



                        <h3 className="
                            mt-8
                            text-xl
                            font-bold
                        ">
                            {item.title}
                        </h3>


                        <p className="
                            mt-5
                            leading-7
                            text-gray-300
                        ">
                            {item.desc}
                        </p>



                        <div className="
                            mt-8
                            h-[2px]
                            w-0
                            bg-[#14b8a6]
                            transition-all
                            duration-500
                            group-hover:w-full
                        "/>


                    </div>


                </div>


            ))}


        </div>


    </div>

</section>

 {/* Insights */}
            <section className="bg-gray-50 py-20 px-6">

                <div className="mx-auto max-w-4xl">

                    {/* Heading */}
                    <div className="text-center">

                        <h2 className="text-2xl font-bold text-[#0e847b] underline underline-offset-6">
                            CUSTOMER INSIGHTS
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Explore their experiences
                        </p>

                    </div>


                   {/* Cards */}
<div className="mt-14 overflow-hidden">

    <div
        className="
            flex 
            gap-6
            transition-transform 
            duration-700
            ease-in-out
        "
        style={{
            transform: `translateX(-${active * 50}%)`
        }}
    >

        {testimonials.map((item, index) => (

            <div
                key={index}
                className="
                    min-w-[calc(50%-12px)]
                    rounded-3xl
                    bg-white
                    p-6
                    shadow-lg
                    transition
                    duration-500
                    hover:-translate-y-2
                "
            >

                <div className="text-3xl text-[#0e847b]">
                    "
                </div>


                <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.quote}
                </p>



                <div className="mt-6 flex items-center gap-4">

                    <div
                        className="
                            flex 
                            h-12 
                            w-12 
                            items-center 
                            justify-center
                            rounded-full
                            bg-[#0e847b]
                            text-white
                            font-bold
                        "
                    >
                        {item.initials}
                    </div>


                    <div>

                        <h4 className="text-sm font-semibold text-gray-900">
                            {item.name}
                        </h4>

                        <p className="text-sm text-gray-500">
                            {item.role}
                        </p>

                    </div>


                </div>


            </div>

        ))}


    </div>

</div>

                    {/* Dots */}
                    <div className="mt-10 flex justify-center gap-3">

                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onMouseEnter={() => setActive(index)}
                                className={`
                        h-3 rounded-full transition-all duration-300
                        ${active === index
                                        ? "w-10 bg-[#0e847b]"
                                        : "w-3 bg-gray-300"
                                    }
                    `}
                            />
                        ))}

                    </div>


                </div>

            </section>

            <section className="mt-6">

                <Footer />
            </section>


        </main>
    );
}