"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="relative bg-[#f8fbfb] text-white overflow-hidden w-full">

            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#0e847b]/20 blur-3xl" />
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#0e847b]/20 blur-3xl" />


            <div
                className="
                    relative
                    mx-auto
                    md:mx-20
                    lg:mx-20
                    w-full
                    max-w-6xl
                    px-5
                    sm:px-8
                    lg:px-10
                    py-10
                    md:py-16
                "
            >


                {/* FOOTER GRID */}
               <div
    className="
        grid
        grid-cols-1
        sm:grid-cols-3
        lg:grid-cols-4
        gap-10
        text-center
        sm:text-left
    "
>


                    {/* LOGO */}
                    <div
className="
space-y-5
flex
flex-col
items-center
sm:items-start
lg:col-span-1
"
>

                    <a href="/">
                        <Image
                            src="/images/logo.jpeg"
                            alt="FAB"
                            width={170}
                            height={170}
                            className="object-contain"
                        />
                    </a>

                        <p className="text-gray-600 leading-7 text-sm max-w-xs">
                            Secure and smarter financial solutions across the UAE
                            with trusted mortgage guidance.
                        </p>

                    </div>



                    {/* Explore */}
                    <div
className="
sm:flex
sm:flex-col
"
>

                        <h3 className="text-md text-gray-700 font-semibold">
                            Explore
                        </h3>

                        <ul
className="
mt-4
flex
flex-row
flex-wrap
justify-center
gap-5
text-gray-600
text-sm

sm:flex-col
sm:space-y-4
sm:gap-0
sm:justify-start
"
>

                            <li>
                                <Link href="/about" className="hover:text-[#0e847b]">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/services" className="hover:text-[#0e847b]">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link href="/calculator" className="hover:text-[#0e847b]">
                                    Calculator
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-[#0e847b]">
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>




                    {/* Services */}
                    <div
className="
sm:flex
sm:flex-col
"
>

                        <h3 className="text-md text-gray-700 font-semibold">
                            Services
                        </h3>


                        <ul
className="
mt-4
flex
flex-row
flex-wrap
justify-center
gap-5
text-gray-600
text-sm

sm:flex-col
sm:space-y-4
sm:gap-0
sm:justify-start
"
>

                            <li>
                                <Link href="/services/mortgages" className="hover:text-[#0e847b]">
                                    Mortgages
                                </Link>
                            </li>

                            <li>
                                <Link href="/services/businessfinance" className="hover:text-[#0e847b]">
                                    Business Finance
                                </Link>
                            </li>

                            <li>
                                <Link href="/services/goldenvisa" className="hover:text-[#0e847b]">
                                    Golden Visa
                                </Link>
                            </li>

                            <li>
                                <Link href="/services/financialadvise" className="hover:text-[#0e847b]">
                                    Financial Advisory
                                </Link>
                            </li>

                            <li>
                                <Link href="/services/residentssupport" className="hover:text-[#0e847b]">
                                    Residency Support
                                </Link>
                            </li>

                        </ul>

                    </div>





                    {/* Contact */}
                    <div
className="
sm:col-span-3
lg:col-span-1
"
>

                        <h3 className="text-md text-gray-700 font-semibold">
                            Contact Us
                        </h3>


                        <div className="
                            mt-4
                            space-y-5
                            text-sm
                            text-gray-600
                            flex
                            flex-col
                            items-center
                            sm:items-start
                        ">


                            <div className="flex gap-3 max-w-xs">

                                <span>📍</span>

                                <a
                                    href="https://maps.google.com/?q=Office+1104+Al+Fattan+Office+Tower+Dubai+Marina+UAE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#0e847b]"
                                >
                                    Office 1104, Al Fattan Office Tower,
                                    Dubai Marina, UAE
                                </a>

                            </div>



                            <div className="flex gap-3">

                                <span>📞</span>

                                <a
                                    href="tel:+971542321423"
                                    className="hover:text-[#0e847b]"
                                >
                                    +971 54 232 1423
                                </a>

                            </div>



                            <div className="flex gap-3">

                                <span>✉️</span>

                                <a
                                    href="mailto:fabfinancialbroker@gmail.com"
                                    className="hover:text-[#0e847b]"
                                >
                                    fabfinancialbroker@gmail.com
                                </a>

                            </div>


                        </div>


                    </div>


                </div>





                {/* MAP */}
                <div className="mt-12 flex flex-col items-center gap-6">


                    <div
                        className="
                            overflow-hidden
                            rounded-3xl
                            shadow-xl
                            border
                            border-black/10
                            w-full
                            max-w-[700px]
                        "
                    >

                        <iframe

                            className="
                                w-full
                                h-[250px]
                                md:h-[320px]
                            "

                            loading="lazy"

                            allowFullScreen

                            referrerPolicy="no-referrer-when-downgrade"

                            src="https://www.google.com/maps?q=Office+1104,+Al+Fattan+Office+Tower,+Dubai+Marina,+Dubai,+UAE&output=embed"

                        />

                    </div>





                    <a
                        href="https://wa.me/971542117385"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-full
                            bg-[#0e847b]
                            px-8
                            py-4
                            text-sm
                            md:text-base
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:bg-[#0a6b63]
                        "
                    >
                        Book Free Consultation

                    </a>


                </div>





                {/* COPYRIGHT */}

                <div className="mt-12 border-t border-black/10 pt-6">


                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            items-center
                            justify-between
                            gap-4
                            text-center
                        "
                    >

                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} FAB Financial Broker.
                            All rights reserved.
                        </p>



                        <div
                            className="
                                flex
                                flex-wrap
                                justify-center
                                gap-5
                                text-sm
                                text-gray-500
                            "
                        >

                            <a className="hover:text-[#0e847b]">
                                Privacy Policy
                            </a>

                            <a className="hover:text-[#0e847b]">
                                Terms & Conditions
                            </a>

                            <a className="hover:text-[#0e847b]">
                                Cookies
                            </a>

                        </div>


                    </div>


                </div>


            </div>

        </section>
    );
}