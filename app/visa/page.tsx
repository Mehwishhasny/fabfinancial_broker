"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function GoldenVisa() {
    return (
        <>
            <Sidebar />

            <section className="relative overflow-hidden py-20 md:py-28 px-4 md:px-0">

                {/* Background Image */}
                <div className="absolute inset-0">

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />

                </div>

                {/* Decorative Blurs */}
                <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />

                <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-3xl" />



                <div
                    className="
                    relative
                    z-10
                    mx-auto
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    justify-between
                    gap-12
                    lg:gap-16
                    px-4
                    md:px-8
                    ml-0
                    lg:ml-40
                    "
>

                    {/* LEFT */}

                    <div className="max-w-3xl">

                        <p className="uppercase tracking-[0.45em] text-[#0e847b] font-semibold">
                            UAE Golden Visa
                        </p>

                        <h1 className="mt-6 text-3xl md:text-6xl font-bold leading-tight text-gray-900">

                            Build Your Future
                            <span className="block text-[#0e847b]">
                                With Long-Term UAE Residency
                            </span>

                        </h1>

                        <p className="mt-8 text-base md:text-lg leading-7 md:leading-8 text-gray-600">

                            Secure your future with the UAE Golden Visa.
                            Whether you're an investor, entrepreneur, skilled
                            professional or exceptional talent, FAB guides you
                            through every step of the application process with
                            expert advice and complete transparency.

                        </p>


                        {/* Buttons */}

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">

                            <a
                                href="/contact"
                                className="
                                    rounded-full
                                    bg-[#0e847b]
                                    px-8
                                    py-4
                                    text-white
                                    font-semibold
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    "
                            >
                                Apply Now
                            </a>

                            <a
                                href="#eligibility"
                                className="
                    rounded-full
                    border-2
                    border-[#0e847b]
                    px-8
                    py-4
                    font-semibold
                    text-[#0e847b]
                    transition
                    duration-300
                    hover:bg-[#0e847b]
                    hover:text-white
                    "
                            >
                                Check Eligibility
                            </a>

                        </div>



                        {/* Stats */}

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

                            <div>

                                <h3 className="text-4xl font-bold text-[#0e847b]">
                                    10 Years
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Long-Term Residency
                                </p>

                            </div>

                            <div>

                                <h3 className="text-4xl font-bold text-[#0e847b]">
                                    100%
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Guided Assistance
                                </p>

                            </div>

                            <div>

                                <h3 className="text-4xl font-bold text-[#0e847b]">
                                    UAE
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Government Compliant
                                </p>

                            </div>

                        </div>

                    </div>



                    {/* RIGHT SIDE CARD */}

                    <div className="relative hidden lg:block">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-[40px] bg-yellow-400/20 blur-3xl" />

                        <div
                            className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/40
                bg-white/70
                p-8
                backdrop-blur-xl
                shadow-2xl
                w-[380px]
                "
                        >

                            <Image
                                src="/images/goldenvisa.webp"
                                alt="Golden Visa"
                                width={380}
                                height={450}
                                className="rounded-3xl object-cover"
                            />

                            <div className="mt-6">

                                <h3 className="text-2xl font-bold text-gray-900">
                                    Your Journey Starts Here
                                </h3>

                                <p className="mt-3 leading-7 text-gray-800">
                                    From eligibility assessment to document preparation
                                    and application submission, FAB manages the entire
                                    process so you can focus on your future.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Why Choose Golden Visa */}
            <section className="
                    relative
                    overflow-hidden
                    bg-[#f8fbfb]
                    mx-4 md:mx-10 lg:ml-35
                    py-24
                    rounded-[25px] md:rounded-[40px]
                ">


                {/* Background Shapes */}
                <div className="
        absolute
        -top-32
        -right-32
        h-96
        w-96
        rounded-full
        bg-[#0e847b]/10
        blur-3xl
    "/>


                <div className="
        absolute
        -bottom-40
        -left-20
        h-80
        w-80
        rounded-full
        bg-gray-200
        blur-3xl
    "/>



                <div className="
        relative
        mx-auto
        max-w-6xl
        px-8
    ">


                    {/* Heading */}
                    <div className="text-center">


                        <p className="
                uppercase
                tracking-[0.4em]
                text-[#0e847b]
                font-semibold
            ">
                            WHY CHOOSE
                        </p>


                        <h2 className="
                mt-5
                text-2xl md:text-4xl
                font-bold
                text-gray-900
            ">
                            Why Choose UAE Golden Visa?
                        </h2>


                        <p className="
                mx-auto
                mt-6
                max-w-3xl
                text-base md:text-lg
                leading-8
                text-gray-600
            ">
                            Experience long-term stability, freedom, and opportunities
                            with a UAE Golden Visa designed for your future.
                        </p>


                    </div>




                    {/* Cards */}
                    <div className="
            mt-14
            grid
            gap-8
            md:grid-cols-2
        ">



                        {[
                            {
                                number: "01",
                                title: "10-Year Residency",
                                desc: "Enjoy long-term UAE residency with greater security and peace of mind without frequent renewals."
                            },
                            {
                                number: "02",
                                title: "Global Mobility",
                                desc: "Maintain your UAE connection while enjoying flexible international travel opportunities."
                            },
                            {
                                number: "03",
                                title: "Family Inclusion",
                                desc: "Bring your spouse, children, and eligible family members under your Golden Visa sponsorship."
                            },
                            {
                                number: "04",
                                title: "Work & Business Freedom",
                                desc: "Build your career, invest, and establish businesses with greater independence in the UAE."
                            }

                        ].map((item, index) => (


                            <div
                                key={index}
                                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[35px]
                    bg-white
                    p-6 md:p-10
                    shadow-lg
                    border
                    border-gray-100
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:shadow-2xl
                "
                            >


                                {/* Large Number */}
                                <span className="
                    absolute
                    right-8
                    top-5
                    text-7xl
                    font-bold
                    text-[#0e847b]/10
                    transition
                    duration-500
                    group-hover:text-[#0e847b]/20
                ">
                                    {item.number}
                                </span>



                                <div className="
                    relative
                    z-10
                ">


                                    <div className="
                        h-1
                        w-12
                        bg-[#0e847b]
                        transition-all
                        duration-500
                        group-hover:w-24
                    "/>



                                    <h3 className="
                        mt-8
                        text-xl md:text-2xl
                        font-bold
                        text-gray-900
                    ">
                                        {item.title}
                                    </h3>



                                    <p className="
                        mt-5
                        leading-8
                        text-gray-600
                    ">
                                        {item.desc}
                                    </p>


                                </div>



                            </div>


                        ))}


                    </div>



                </div>


            </section>


            {/* WHO IS ELIGIBLE */}

            <section
                id="eligibility"
                className="relative overflow-hidden bg-[#f8fbfb] py-20"
            >

                {/* Background Glow */}
                <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#0e847b]/10 blur-3xl" />
                <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-4 md:px-8 ml-0 lg:ml-25">

                    {/* Heading */}

                    <div className="text-center">

                        <p className="uppercase -mt-10 tracking-[0.45em] text-[#0e847b] font-semibold">
                            Eligibility
                        </p>

                        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
                            Who Is Eligible?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
                            The UAE Golden Visa is available for investors, professionals,
                            entrepreneurs, and exceptional individuals who contribute to
                            the country's growth and development.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-20 grid gap-6 md:grid-cols-2">

                        {[
                            {
                                icon: "🏠",
                                number: "01",
                                title: "Real Estate Investors",
                                desc: "Individuals investing in qualifying residential or commercial properties in the UAE."
                            },
                            {
                                icon: "💰",
                                number: "02",
                                title: "High-Salaried Professionals",
                                desc: "Highly skilled professionals meeting the required salary threshold and employment criteria."
                            },
                            {
                                icon: "💼",
                                number: "03",
                                title: "Business Investors",
                                desc: "Entrepreneurs and business owners with eligible investments or innovative ventures."
                            },
                            {
                                icon: "⭐",
                                number: "04",
                                title: "Exceptional Talent",
                                desc: "Recognized professionals, scientists, artists, athletes, and innovators with outstanding achievements."
                            }

                        ].map((item, index) => (

                            <div
                                key={index}
                                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[35px]
                    bg-white
                    border
                    border-[#0e847b]/10
                    p-6 md:p-8
                    shadow-lg
                    transition-all
                    duration-500
                    hover:-translate-y-4
                    hover:shadow-2xl
                    "
                            >

                                {/* Big Number */}

                                <span
                                    className="
                        absolute
                        -right-5
                        -top-10
                        text-[120px]
                        font-bold
                        text-[#0e847b]/5
                        transition-all
                        duration-500
                        group-hover:text-[#0e847b]/10
                        "
                                >
                                    {item.number}
                                </span>

                                {/* Glow */}

                                <div
                                    className="
                        absolute
                        -right-20
                        -top-20
                        h-44
                        w-44
                        rounded-full
                        bg-[#0e847b]/10
                        blur-3xl
                        opacity-0
                        transition-all
                        duration-700
                        group-hover:opacity-100
                        "
                                />

                                <div className="relative z-10">

                                    <div
                                        className="
                            flex
                            h-14 w-14 md:h-16 md:w-16 text-2xl md:text-3xl
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#0e847b]/10
                            transition-all
                            duration-500
                            group-hover:rotate-6
                            group-hover:scale-110
                            "
                                    >
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-8 text-xl md:text-2xl font-bold text-gray-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 leading-7 md:leading-8 text-gray-600">
                                        {item.desc}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* REQUIRED DOCUMENTS */}

            <section className="relative overflow-hidden bg-[#0b1f1d] mx-4 md:mx-10 lg:ml-35 rounded-[40px] py-24 text-white">

                <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#0e847b]/20 blur-3xl" />

                <div className="mx-auto max-w-5xl px-8">

                    <div className="text-center">

                        <p className="uppercase tracking-[0.45em] text-[#14b8a6] font-semibold">
                            Documentation
                        </p>

                        <h2 className="mt-5 text-2xl md:text-5xl font-bold">
                            Required Documents
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                            Prepare the following documents to ensure a smooth and
                            hassle-free Golden Visa application process.
                        </p>

                    </div>



                    <div className="mt-10 grid gap-6 md:grid-cols-2">

                        {[
                            "Passport Copy (6+ months validity)",
                            "Passport-size Photograph (white background)",
                            "Medical Fitness Certificate",
                            "Police Clearance Certificate",
                            "Proof of Investment (for investors)",
                            "Educational Certificates (for professionals)"

                        ].map((item, index) => (

                            <div
                                key={index}
                                className="
                    group
                    flex
                    items-center
                    gap-5
                    rounded-3xl
                    bg-white/40
                    p-4 md:p-6
                    backdrop-blur-xl
                    transition
                    duration-500
                    hover:bg-white/20
                    hover:-translate-y-2
                    "
                            >

                                <div className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0e847b]
                    font-bold
                    text-base md:text-lg
                    ">
                                    ✓
                                </div>

                                <h3 className="text-base md:text-lg font-semibold">
                                    {item}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>




            {/* GOLDEN VISA PROCESS */}

            <section className="
    relative
    overflow-hidden
    bg-[#f8fbfb]
    py-24
  mx-4 md:mx-10 lg:ml-35
    rounded-[40px]
    mt-10
">

                <div className="mx-auto max-w-6xl px-8">


                    <div className="text-center">

                        <p className="
uppercase
tracking-[0.45em]
text-[#0e847b]
font-semibold
">
                            Process
                        </p>

                        <h2 className="
mt-5
text-2xl md:text-4xl
font-bold
text-gray-900
">
                            Your Golden Visa Journey
                        </h2>

                    </div>



                    <div className="relative mt-24">


                        {/* Center Line */}

                        <div className="
                                absolute
                                left-1/2
                                top-0
                                hidden
                                h-full
                                w-[3px]
                                -translate-x-1/2
                                bg-[#0e847b]/20
                                md:block
                                "/>



                        {[
                            {
                                step: "01",
                                icon: "🤝",
                                title: "Consultation",
                                desc: "Understand your eligibility and Golden Visa requirements."
                            },
                            {
                                step: "02",
                                icon: "📄",
                                title: "Document Collection",
                                desc: "Prepare and verify all required documents."
                            },
                            {
                                step: "03",
                                icon: "🚀",
                                title: "Application Submission",
                                desc: "Submit your complete application with expert support."
                            },
                            {
                                step: "04",
                                icon: "🏆",
                                title: "Golden Visa Approval",
                                desc: "Receive your UAE Golden Visa and start your journey."
                            }

                        ].map((item, index) => (


                            <div
                                key={index}
                                className={`
                                        relative
                                        mb-20
                                        flex
                                        items-center
                                        gap-6 md:gap-10

                                        ${index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                    }
`}
                            >



                                {/* ICON SIDE */}

                                <div className="
                                    flex md:flex
                                    w-1/2
                                    justify-center
                                    ">


                                    <div className="
                                        flex
                                        h-20
                                        w-20
                                        md:h-36
                                        md:w-36
                                        text-3xl
                                        md:text-6xl
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white
                                        border-2
                                        border-[#0e847b]/20
                                        shadow-xl
                                        transition-all
                                        duration-500
                                        hover:scale-110
                                        hover:shadow-2xl
                                        hover:border-[#0e847b]
                                        ">
                                        {item.icon}
                                    </div>


                                </div>





                                {/* CENTER DOT */}

                                <div className="
absolute
left-1/2
hidden
md:flex
-translate-x-1/2
items-center
justify-center
">

                                    <div className="
h-8
w-8
rounded-full
bg-[#0e847b]
border-[6px]
border-[#f8fbfb]
shadow-lg
transition-all
duration-500
hover:scale-125
"/>

                                </div>






                                {/* CARD SIDE */}

                                <div className="
w-full
md:w-1/2
">


                                    <div className="
group
rounded-[35px]
bg-white
p-6 md:p-8
shadow-lg
border
border-gray-100
transition-all
duration-500
hover:-translate-y-3
hover:shadow-2xl
">


                                        <span className="
text-sm
tracking-widest
font-semibold
text-[#0e847b]
">
                                            STEP {item.step}
                                        </span>



                                        <h3 className="
mt-4
text-xl md:text-2xl
font-bold
text-gray-900
">
                                            {item.title}
                                        </h3>



                                        <p className="
mt-5
leading-8
text-gray-600
">
                                            {item.desc}
                                        </p>



                                        <div className="
mt-8
h-[3px]
w-12
bg-[#0e847b]
transition-all
duration-500
group-hover:w-full
"/>


                                    </div>


                                </div>




                            </div>


                        ))}


                    </div>


                </div>

            </section>

            {/* GOLDEN VISA CTA */}

<section
    className="
    relative
    overflow-hidden
    bg-[#0b1f1d]
    mx-4 md:mx-10 lg:ml-35
    my-5
    rounded-[40px]
    py-18
    text-white
"
>


    {/* Glow */}
    <div
        className="
        absolute
        -right-40
        -top-40
        h-96
        w-96
        rounded-full
        bg-[#14b8a6]/30
        blur-3xl
    "
    />


    <div
        className="
        absolute
        -left-40
        -bottom-40
        h-86
        w-86
        rounded-full
        bg-yellow-400/10
        blur-3xl
    "
    />



    {/* Animated Diamonds */}

    <div
        className="
        absolute
        top-10
        right-20
        h-16
        w-16
        rotate-45
        rounded-xl
        border
        border-white/20
        animate-pulse
    "
    />


    <div
        className="
        absolute
        top-32
        right-44
        h-8
        w-8
        rotate-45
        bg-white/10
        animate-bounce
    "
        style={{
            animationDuration:"5s"
        }}
    />



    {/* Graph Background */}

    <div
        className="
        absolute
        right-10
        top-10
        opacity-20
        pointer-events-none
    "
    >

        <svg
            width="450"
            height="280"
            viewBox="0 0 260 150"
            fill="none"
        >

            {/* Grid */}

            <path
                d="M0 30H260"
                stroke="white"
                strokeOpacity=".15"
            />

            <path
                d="M0 70H260"
                stroke="white"
                strokeOpacity=".15"
            />

            <path
                d="M0 110H260"
                stroke="white"
                strokeOpacity=".15"
            />


            <path
                d="M50 0V150"
                stroke="white"
                strokeOpacity=".15"
            />

            <path
                d="M120 0V150"
                stroke="white"
                strokeOpacity=".15"
            />

            <path
                d="M190 0V150"
                stroke="white"
                strokeOpacity=".15"
            />



            {/* Growth Line */}

            <path
                className="graph-line"
                d="
                M10 120
                C50 110 70 95 100 100
                C130 105 150 60 180 70
                C210 80 230 35 250 20
                "
                stroke="#14b8a6"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
            />


            {/* Points */}

            <circle
                cx="10"
                cy="120"
                r="5"
                fill="#14b8a6"
            />

            <circle
                cx="100"
                cy="100"
                r="5"
                fill="#14b8a6"
            />

            <circle
                cx="180"
                cy="70"
                r="5"
                fill="#14b8a6"
            />

            <circle
                cx="250"
                cy="20"
                r="6"
                fill="#14b8a6"
            />


        </svg>

    </div>




    <div
        className="
        relative
        mx-auto
        max-w-5xl
        px-8
        text-center
    "
    >


        <p
            className="
            uppercase
            tracking-[0.5em]
            text-[#14b8a6]
            font-semibold
        "
        >
            Start Your Journey
        </p>



        <h2
            className="
            mt-2
           text-2xl md:text-4xl
            font-bold
        "
        >
            Secure Your Future In UAE
        </h2>



        <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-gray-300
        "
        >
            Our Golden Visa experts help you understand your eligibility,
            prepare documents, and complete your application with confidence.
        </p>



        {/* Features */}

        <div
            className="
            mt-10
            grid
            gap-4
            md:grid-cols-3
        "
        >

            {[
                "Free Eligibility Check",
                "Expert Documentation Support",
                "End-to-End Assistance"
            ].map((item,index)=>(

                <div
                    key={index}
                    className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    backdrop-blur-md
                    p-5
                    transition
                    duration-500
                    hover:-translate-y-2
                    hover:bg-white/20
                "
                >

                    <p className="text-sm text-gray-200">
                        ✓ {item}
                    </p>

                </div>

            ))}

        </div>




        <a
            href="/contact"
            className="
            mt-10
            inline-flex
            rounded-full
            bg-[#14b8a6]
            px-8 md:px-10 py-3 md:py-4
            font-semibold
            text-white
            shadow-xl
            transition
            duration-500
            hover:-translate-y-2
            hover:bg-[#0e847b]
            hover:shadow-2xl
        "
        >
            Get Golden Visa Consultation
        </a>


    </div>


</section>


            <Footer />
        </>
    )
};