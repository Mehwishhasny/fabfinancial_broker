// Hero.tsx
"use client";

import Image from "next/image";
import ImageSlider from "./Slider";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BlueprintHero() {

    const [active, setActive] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const testimonials = [
        {
            quote:
                "The team guided us through every step of buying our first home. The mortgage process felt simple and transparent.",
            name: "Anna D'Cruz",
            role: "First-time Home Buyer",
            initials: "AD",
        },
        {
            quote:
                "The team guided us through every step of buying our first home. The mortgage process felt simple and transparent.",
            name: "Emily Carter",
            role: "Project Manager",
            initials: "EC",
        },
        {
            quote:
                "The team guided us through every step of buying our first home. The mortgage process felt simple and transparent.",
            name: "Arnest John",
            role: "Home Owner",
            initials: "AJ",
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
            name: "Ron Bart",
            role: "Home Owner",
            initials: "RB",
        },]


    const houseRef = useRef<SVGSVGElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!houseRef.current) return;

        const ctx = gsap.context(() => {
            const paths = houseRef.current!.querySelectorAll("path");

            paths.forEach((path) => {
                const length = path.getTotalLength();

                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                    opacity: 0.4,
                });
            });

            gsap.set(titleRef.current, {
                opacity: 0,
                y: 50,
            });

            gsap.set(buttonRef.current, {
                opacity: 0,
                y: 20,
            });

            const tl = gsap.timeline({
                defaults: {
                    ease: "power2.out",
                },
            });

            // Draw first few lines
            paths.forEach((path, index) => {
                tl.to(path, {
                    strokeDashoffset: 0,
                    opacity: 1,
                    duration: 0.45,
                });

                // Show heading while house is still being built
                if (index === 2) {
                    tl.to(
                        titleRef.current,
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power3.out",
                        },
                        "<" // starts together with the 3rd line
                    );

                    tl.to(
                        buttonRef.current,
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "back.out(1.7)",
                        },
                        "-=0.3"
                    );
                }
            });

            // Final glow pulse
            tl.to(
                paths,
                {
                    opacity: 1,
                    duration: 0.2,
                },
                "-=0.2"
            );

            gsap.to(paths, {
                filter:
                    "drop-shadow(0 0 4px rgba(0,0,0,.15)) drop-shadow(0 0 10px rgba(0,0,0,.25))",

                repeat: -1,
                yoyo: true,
                duration: 2,
            });
        }, houseRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <section
                className="min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-center px-4 md:px-6 lg:px-20 overflow-hidden relative w-full -mb-20"
            >
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-center
                        scale-110
                        
                    "
                >
                    <source src="/videos/herobg2.mp4" type="video/mp4" />
                </video>
                {/* Overlay */}
                <div className="absolute inset-1 bg-[#f8fbfb]/30" />

                <div className="absolute md:-top-20 top-0 -right-20 md:h-92 h-50 md:w-92 w-50 rounded-full bg-[#0e847b]/20 blur-3xl" />

                {/* LEFT */}
                <div className="
                relative 
                z-10 
                        w-full
                        lg:w-1/2
                        px-5
                        lg:px-0
                        lg:ml-20
                        flex
                        flex-col
                        items-center
                        lg:items-start
                        text-center
                        lg:text-left
                        pt-15
                        lg:pt-0
                        ">
                    <h1
                        ref={titleRef}
                        className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black"
                    >
                        Build Your Path
                        <br />
                        To Your Dream Home
                    </h1>

                    <p className="mt-4 md:mt-6 md:max-w-md max-w-[250px] text-sm sm:text-lg lg:text-xl text-gray-900">
                        Smart mortgage solutions designed around your future.
                    </p>

                    <button
                        ref={buttonRef}
                        className="mt-6 md:mt-8 text-sm md:text-base px-6 py-3 rounded-full bg-[#0e847b] text-white font-medium border-2 border-white hover:bg-gray-200 hover:text-gray-800 transition"
                    >
                        <Link href="/calculator">
                            Get Started
                        </Link>
                    </button>
                </div>

                {/* RIGHT */}
                <div className="relative z-10 mt-2 lg:mt-0 w-[350px] lg:w-1/2 flex justify-center items-center">
                    <svg
                        ref={houseRef}
                        viewBox="0 0 500 500"
                        fill="none"
                        className="relative z-10 mx-auto w-[350px] h-[300px] md:h-auto sm:w-[350px] md:w-[380px] lg:w-full max-w-[520px]"
                    >

                        <defs>
                            <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Roof */}
                        <path
                            d="M100 220 L250 80 L400 220"
                            stroke="#111"
                            strokeWidth="4"
                            strokeLinecap="round"
                            filter="url(#glow)"
                        />

                        {/* Left wall */}
                        <path
                            d="M130 220 V400"
                            stroke="#111"
                            strokeWidth="4"
                            strokeLinecap="round"
                            filter="url(#glow)"
                        />

                        {/* Right wall */}
                        <path
                            d="M370 220 V400"
                            stroke="#111"
                            strokeWidth="4"
                            strokeLinecap="round"
                            filter="url(#glow)"
                        />

                        {/* Bottom */}
                        <path
                            d="M130 400 H370"
                            stroke="#111"
                            strokeWidth="4"
                            strokeLinecap="round"
                            filter="url(#glow)"
                        />

                        {/* Door */}
                        <path
                            d="M220 400 V290 H280 V400"
                            stroke="#111"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#glow)"
                        />


                    </svg>

                    {/* Mortgage Graph */}
                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            justify-center
                            items-center
                            opacity-10
                            pointer-events-none
                            md:opacity-30
                        "
                    >
                        <svg
                            viewBox="0 0 260 150"
                            className="w-[220px] sm:w-[280px] md:w-[460px] h-auto"
                            fill="none"
                        >
                            {/* Grid */}
                            <path d="M0 30H260" stroke="black" strokeOpacity="0.15" />
                            <path d="M0 70H260" stroke="black" strokeOpacity="0.15" />
                            <path d="M0 110H260" stroke="black" strokeOpacity="0.15" />

                            <path d="M40 0V150" stroke="black" strokeOpacity=".15" />
                            <path d="M100 0V150" stroke="black" strokeOpacity=".15" />
                            <path d="M160 0V150" stroke="black" strokeOpacity=".15" />
                            <path d="M220 0V150" stroke="black" strokeOpacity=".15" />

                            {/* Graph */}
                            <path
                                className="graph-line"
                                d="M10 120
         C45 110 60 85 90 90
         C120 95 145 40 180 55
         C210 68 225 25 250 18"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                                fill="none"
                            />

                            {/* Data points */}
                            <circle cx="10" cy="120" r="4" fill="black" />
                            <circle cx="90" cy="90" r="4" fill="black" />
                            <circle cx="180" cy="55" r="4" fill="black" />
                            <circle cx="250" cy="18" r="5" fill="black" />
                        </svg>
                    </div>

                    {/* Glow */}
                    <div
                        className="
        absolute
        -right-20
        -top-20
        lg:-right-32
        lg:-top-32
        h-60
        w-60
        lg:h-92
        lg:w-92
        rounded-full
        bg-white/10
        blur-xl
"
                    />
                </div>
            </section>


            {/* About */}
            <section
                id="about"
                className="relative min-h-screen overflow-hidden bg-white flex items-center px-0 lg:px-16 py-16 lg:py-0"
            >
                {/* Background Decorations */}
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#0e847b]/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-3xl" />

                <div className="relative z-10 md:mx-auto mx-5 -mt-16 md:mt-2 flex max-w-[350px] md:max-w-7xl flex-col lg:flex-row items-center gap-20 lg:gap-20">

                    {/* LEFT IMAGE */}
                    <div className="order-2 lg:order-1 relative w-full lg:w-1/2 max-w-md mx-auto lg:max-w-none lg:ml-24">

                        {/* Decorative box */}
                        <div className="absolute -left-4 lg:-left-8 -top-4 lg:-top-8 h-full w-full rounded-[30px] lg:rounded-[40px] border-2 border-[#0e847b]" />

                        <div className="relative overflow-hidden rounded-[30px] lg:rounded-[40px] shadow-2xl">
                            <Image
                                src="/images/about.jpg"
                                alt="About FAB"
                                width={650}
                                height={700}
                                className="md:h-full h-[200px] md:w-full w-[300px] object-cover transition duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-8 lg:-bottom-12 right-4 lg:-right-8 rounded-2xl lg:rounded-3xl bg-white p-5 lg:p-8 shadow-2xl">

                            <h3 className="text-base lg:text-xl font-bold text-gray-800">
                                Committed to
                                <br />
                                Excellence
                            </h3>

                        </div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="order-1 lg:order-2 w-full lg:w-1/2 text-center md:text-left ml-0 lg:ml-10 lg:text-left">

                        <p className="uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[#0e847b] font-bold mb-4 underline underline-offset-8">
                            About <b>FAB</b>
                        </p>

                        <h2 className="mt-6 lg:mt-8 text-2xl lg:text-5xl font-bold leading-tight text-gray-900">
                            Trusted Financial Advisors in UAE
                        </h2>

                        <p className="
                            mt-6
                            text-base
                            lg:text-lg
                            leading-8
                            text-gray-600
                            max-w-md
                            mx-auto
                            lg:mx-0
                            ">
                            At <strong>Financial Broker (FAB)</strong>, we simplify complex
                            financial decisions with expert guidance, strategic planning,
                            and access to the UAE's leading banks and lenders.
                        </p>

                        <p className="mt-5 lg:mt-6 text-base lg:text-lg leading-8 lg:leading-9 text-gray-600 max-w-[280px] md:max-w-full">
                            Whether you're purchasing your first home, expanding your
                            business, or planning long-term investments, we provide
                            transparent advice tailored to your goals.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-10 lg:mt-12">

                            {/* Happy Clients */}
                            <div className="relative overflow-hidden rounded-3xl p-[2px] beam-card">

                                <div className="beam absolute inset-0"></div>

                                <div className="relative z-10 h-full rounded-[22px] bg-white p-6">

                                    <h4 className="text-3xl lg:text-4xl font-bold text-[#0e847b]">
                                        500+
                                    </h4>

                                    <p className="mt-2 text-gray-700 font-medium">
                                        Happy Clients
                                    </p>

                                </div>

                            </div>

                            {/* Banking Partners */}
                            <div className="relative overflow-hidden rounded-3xl p-[2px] beam-card">

                                <div className="beam absolute inset-0"></div>

                                <div className="relative z-10 h-full rounded-[22px] bg-white p-6">

                                    <h4 className="text-3xl lg:text-4xl font-bold text-[#0e847b]">
                                        10+
                                    </h4>

                                    <p className="mt-2 text-gray-700 font-medium">
                                        Banking Partners
                                    </p>

                                </div>

                            </div>

                        </div>

                        <button className="mt-8 rounded-full bg-gray-700 text-white text-sm px-6 py-3 transition cursor-pointer hover:scale-105 hover:bg-[#0a6b63]">

                            <Link href="/about">
                                Discover Our Story
                            </Link>

                        </button>

                    </div>

                </div>
            </section>

            <section className="mt-10">
                <ImageSlider />
            </section>



            <section
                id="advisor"
                className="relative overflow-hidden bg-[#f8fbfb] md:m-2 m-0 py-10 lg:py-20 items-center"
            >
                {/* Background */}
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#0e847b]/10 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-[120px]" />

                <div className="relative md:mx-auto mx-0 max-w-[350px] md:max-w-5xl px-2 lg:px-8">

                    {/* Heading */}
                    <div className="text-center">

                        <p className="uppercase tracking-[0.25em] lg:tracking-[0.4em] text-[#0e847b] mt-4 font-semibold text-sm lg:text-base">
                            Why FAB
                        </p>

                        <h2 className="mt-5 text-3xl lg:text-5xl font-bold text-gray-900">
                            Your Financial Journey
                        </h2>

                        <p className="mt-5 mx-auto max-w-2xl text-base lg:text-lg text-gray-600 leading-7 lg:leading-8">
                            Every client has different financial goals.
                            Our role is to guide you through each milestone
                            with clarity, confidence and expert support.
                        </p>

                    </div>

                    {/* Timeline */}
                    <div className="relative w-full lg:w-[90%] mx-auto lg:ml-20 mt-14 lg:mt-20">

                        {/* Vertical Line */}
                        <div
                            className="
                    absolute
                    left-10
                    lg:left-1/2
                    top-0
                    h-full
                    w-[3px]
                    -translate-x-1/2
                    bg-gradient-to-b
                    from-[#0e847b]
                    via-[#14b8a6]
                    to-yellow-300
                "
                        ></div>

                        {[
                            {
                                title: "Financial Solutions",
                                desc: "Flexible financial products designed around your personal and business needs.",
                                image: "/images/solution.jpg",
                            },
                            {
                                title: "Mortgages",
                                desc: "Access competitive mortgage options from trusted banking partners.",
                                image: "/images/mortgage.jpg",
                            },
                            {
                                title: "UAE Golden Visa",
                                desc: "Expert guidance to help you secure long-term residency.",
                                image: "/images/goldenvisa.webp",
                            },
                            {
                                title: "End-to-end Support",
                                desc: "We're here even after approval to support your financial future.",
                                image: "/images/support.jpg",
                            },
                        ].map((item, index) => (

                            <div
                                key={item.title}
                                className="relative mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-center lg:min-h-[260px]">

                                {/* ---------------- MOBILE IMAGE ---------------- */}
                                <div className="lg:hidden w-full pl-16 pr-4">
                                    <div className="overflow-hidden rounded-3xl shadow-xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={600}
                                            height={300}
                                            className="w-full h-44 object-cover"
                                        />
                                    </div>
                                </div>

                                {/* ---------------- DESKTOP IMAGE ---------------- */}
                                <div
                                    className={`
                            hidden lg:block
                            absolute
                            top-1/2
                            -translate-y-1/2
                            w-[38%]
                            ${index % 2 === 0
                                            ? "right-0"
                                            : "left-0"
                                        }
                        `}
                                >
                                    <div className="overflow-hidden rounded-3xl shadow-xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={500}
                                            height={300}
                                            className="h-54 w-full object-cover transition duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* CARD */}
                                <div

                                    className={`
                                            mt-4
                                            ml-16
                                            mr-4

                                            lg:mt-0
                                            lg:ml-0
                                            lg:mr-0
                                            lg:w-[42%]

                                            ${index % 2 === 0
                                            ? "lg:mr-auto"
                                            : "lg:ml-auto"
                                        }
                                        
                                    `}
                                >

                                    <div
                                        className="
                                rounded-3xl
                                bg-white
                                p-5
                                shadow-lg
                                transition
                                duration-500
                                hover:-translate-y-2
                                hover:shadow-2xl
                            "
                                    >
                                        <h3 className="text-xl lg:text-2xl font-bold text-[#0e847b]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 lg:mt-4 text-sm lg:text-base leading-7 lg:leading-8 text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                < div
                                    className="
                                absolute
                                left-10
                                lg:left-1/2
                                top-24
                                lg:top-1/2
                                h-5
                                w-5
                                lg:h-6
                                lg:w-6
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                border-4
                                border-white
                                bg-[#0e847b]
                                shadow-[0_0_20px_rgba(14,132,123,.6)]
                                "
                                >
                                </div>
                            </div>

                        ))}

                    </div>

                </div >
            </section >

            <section
                id="services"
                className="relative overflow-hidden bg-white py-3 md:py-16 lg:py-20"
            >
                {/* Background Blur */}
                <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-[120px]" />

                <div className="relative md:mx-auto w-full max-w-6xl px-5 -mt-2 md:mt-auto sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="md:text-center">
                        <p className="uppercase tracking-[0.25em] md:tracking-[0.4em] text-[#0e847b] font-semibold text-sm md:text-base">
                            Our Services
                        </p>

                        <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900 w-[240px] md:w-full">
                            Financial Solutions Designed Around You
                        </h2>

                        <p className="md:mx-auto mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-7 md:leading-8 w-[260px] md:w-full text-gray-600">
                            Whether you're buying your dream home, growing your business,
                            or planning your future, our experts provide tailored financial
                            solutions with complete transparency.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-6 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 md:w-full w-1/2 mx-0 md:mx-10">

                        {/* Card 1 */}
                        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl p-[2px] w-[280px] md:w-auto beam-card">

                            <div className="beam absolute inset-0"></div>

                            <div className="relative z-10 rounded-[20px] bg-white p-5 sm:p-6 md:p-8 transition duration-500 hover:-translate-y-2 md:hover:-translate-y-3">

                                <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-[#0e847b]/10 text-xl sm:text-2xl md:text-3xl">
                                    🔑
                                </div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                                    Mortgages
                                </h3>

                                <p className="mt-3 text-sm md:text-base leading-6 md:leading-8 text-black">
                                    Competitive mortgage solutions from leading UAE banks with
                                    expert guidance through every step.
                                </p>

                                <button className="mt-5 md:mt-7 inline-block font-semibold text-[#0e847b] text-sm md:text-base hover:translate-x-1 transition">
                                    Learn More →
                                </button>

                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl w-[280px] md:w-auto p-[2px] beam-card">

                            <div className="beam absolute inset-0"></div>

                            <div className="relative z-10 rounded-[20px] bg-white p-5 sm:p-6 md:p-8 transition duration-500 hover:-translate-y-2 md:hover:-translate-y-3">

                                <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-[#0e847b]/10 text-xl sm:text-2xl md:text-3xl">
                                    🏢
                                </div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                                    Business Finance
                                </h3>

                                <p className="mt-3 text-sm md:text-base leading-6 md:leading-8 text-black">
                                    Working capital, equipment finance and customized lending
                                    solutions to accelerate business growth.
                                </p>

                                <button className="mt-5 md:mt-7 inline-block font-semibold text-[#0e847b] text-sm md:text-base hover:translate-x-1 transition">
                                    Learn More →
                                </button>

                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl w-[280px] md:w-auto p-[2px] beam-card">

                            <div className="beam absolute inset-0"></div>

                            <div className="relative z-10 rounded-[20px] bg-white p-5 sm:p-6 md:p-8 transition duration-500 hover:-translate-y-2 md:hover:-translate-y-3">

                                <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-[#0e847b]/10 text-xl sm:text-2xl md:text-3xl">
                                    ✨
                                </div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                                    Golden Visa
                                </h3>

                                <p className="mt-3 text-sm md:text-base leading-6 md:leading-8 text-black">
                                    End-to-end assistance with UAE Golden Visa eligibility,
                                    investment planning and documentation.
                                </p>

                                <button className="mt-5 md:mt-7 inline-block font-semibold text-[#0e847b] text-sm md:text-base hover:translate-x-1 transition">
                                    Learn More →
                                </button>

                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl w-[280px] md:w-auto p-[2px] beam-card">

                            <div className="beam absolute inset-0"></div>

                            <div className="relative z-10 rounded-[20px] bg-white p-5 sm:p-6 md:p-8 transition duration-500 hover:-translate-y-2 md:hover:-translate-y-3">

                                <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-[#0e847b]/10 text-xl sm:text-2xl md:text-3xl">
                                    🧭
                                </div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                                    Financial Advisory
                                </h3>

                                <p className="mt-3 text-sm md:text-base leading-6 md:leading-8 text-black">
                                    Personalized financial guidance to help you make confident
                                    borrowing and investment decisions.
                                </p>

                                <button className="mt-5 md:mt-7 inline-block font-semibold text-[#0e847b] text-sm md:text-base hover:translate-x-1 transition">
                                    Learn More →
                                </button>

                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl w-[280px] md:w-auto p-[2px] beam-card">

                            <div className="beam absolute inset-0"></div>

                            <div className="relative z-10 rounded-[20px] bg-white p-5 sm:p-6 md:p-8 transition duration-500 hover:-translate-y-2 md:hover:-translate-y-3">

                                <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-[#0e847b]/10 text-xl sm:text-2xl md:text-3xl">
                                    🤝
                                </div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                                    Resident's Support
                                </h3>

                                <p className="mt-3 text-sm md:text-base leading-6 md:leading-8 text-black">
                                    Dedicated assistance for UAE residents with financial guidance,
                                    documentation support and ongoing service whenever you need it.

                                </p>

                                <button className="mt-5 md:mt-7 inline-block font-semibold text-[#0e847b] text-sm md:text-base hover:translate-x-1 transition">
                                    Learn More →
                                </button>

                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* Mortgage Calculator */}
            <section className="my-6 lg:my-15 px-4 lg:px-6">
                <div
                    className="
        relative
        overflow-hidden
        mx-auto
        w-full
        max-w-[350px]
        md:max-w-5xl
        rounded-[30px]
        lg:rounded-[40px]
        bg-[#0e847b]
        p-4
        md:p-14
        md:text-center
        text-white
    "
                >
                    {/* Animated Diamonds */}

                    <div
                        className="
                absolute
                top-0
                right-0
                h-10
                w-10
                lg:h-14
                lg:w-14
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
                top-16
                right-8
                lg:top-20
                lg:right-12
                h-6
                w-6
                lg:h-8
                lg:w-8
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
                right-16
                lg:right-24
                h-4
                w-4
                lg:h-5
                lg:w-5
                rotate-45
                bg-white/25
            "
                    />

                    {/* Mortgage Graph */}
                    <div className="hidden lg:block absolute top-4 right-20 opacity-20 pointer-events-none">
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

                            <path
                                d="M10 120
                    C45 110 60 85 90 90
                    C120 95 145 40 180 55
                    C210 68 225 25 250 18"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                fill="none"
                            />

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
                -right-20
                -top-20
                lg:-right-32
                lg:-top-32
                h-48
                w-48
                lg:h-72
                lg:w-72
                rounded-full
                bg-white/10
                blur-3xl
            "
                    />

                    {/* Bottom Diamonds */}

                    <div
                        className="
                absolute
                bottom-0
                left-0
                h-10
                w-10
                lg:h-14
                lg:w-14
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
                bottom-14
                left-8
                lg:bottom-20
                lg:left-12
                h-6
                w-6
                lg:h-8
                lg:w-8
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
                left-16
                lg:left-24
                h-4
                w-4
                lg:h-5
                lg:w-5
                rotate-45
                bg-white/25
            "
                    />

                    {/* Content */}
                    <div className="relative z-10">

                        <h2 className="text-2xl md:text-3xl font-bold">
                            Ready To Plan Your Future?
                        </h2>

                        <p className="mt-4 md:mt-5 text-base md:text-lg text-white/90">
                            Calculate your mortgage eligibility today.
                        </p>

                        <a
                            href="/calculator"
                            className="
                    mt-6
                    md:mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-6
                    md:px-8
                    py-3
                    md:py-4
                    text-sm
                    md:text-base
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

            {/* Insights */}
            <section className="bg-gray-50 py-10 md:py-20 px-4">

                <div className="mx-auto w-full max-w-[350px] sm:max-w-md md:max-w-4xl">

                    {/* Heading */}
                    <div className="text-center">

                        <h2 className="text-xl md:text-2xl font-bold text-[#0e847b] underline underline-offset-6">
                            CUSTOMER INSIGHTS
                        </h2>

                        <p className="mt-3 text-sm md:text-base text-gray-600">
                            Explore their experiences
                        </p>

                    </div>

                    {/* Cards */}
                    <div className="mt-10 md:mt-14 overflow-hidden w-full">

                        <div
                            className="
                    flex
                    gap-4
                    md:gap-6
                    transition-transform
                    duration-700
                    ease-in-out
                "
                            style={{
                                transform: `translateX(-${isMobile ? active * 100 : active * 50}%)`,
                            }}
                        >

                            {testimonials.map((item, index) => (

                                <div
                                    key={index}
                                    className="
                            min-w-full 
                            w-full
                            md:min-w-[calc(50%-12px)]
                            rounded-3xl
                            bg-white
                            p-5
                            md:p-6
                            shadow-lg
                            transition
                            duration-500
                            hover:-translate-y-2
                        "
                                >

                                    <div className="text-2xl md:text-3xl text-[#0e847b]">
                                        "
                                    </div>

                                    <p className="mt-4 text-sm md:text-base text-gray-600 leading-7 md:leading-relaxed">
                                        {item.quote}
                                    </p>

                                    <div className="mt-6 flex items-center gap-4">

                                        <div
                                            className="
                                    flex
                                    h-10
                                    w-10
                                    md:h-12
                                    md:w-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#0e847b]
                                    text-white
                                    text-sm
                                    md:text-base
                                    font-bold
                                "
                                        >
                                            {item.initials}
                                        </div>

                                        <div>

                                            <h4 className="text-sm font-semibold text-gray-900">
                                                {item.name}
                                            </h4>

                                            <p className="text-xs md:text-sm text-gray-500">
                                                {item.role}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Dots */}
                    <div className="mt-8 md:mt-10 flex justify-center gap-3">

                        {testimonials.map((_, index) => (

                            <button
                                key={index}
                                onMouseEnter={() => setActive(index)}
                                onClick={() => setActive(index)}
                                className={`
                        h-2.5 md:h-3
                        rounded-full
                        transition-all
                        duration-300
                        ${active === index
                                        ? "w-8 md:w-10 bg-[#0e847b]"
                                        : "w-2.5 md:w-3 bg-gray-300"
                                    }
                    `}
                            />

                        ))}

                    </div>

                </div>

            </section>

            <section>
                <Footer />
            </section>
        </>
    );
}  