"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="relative bg-[#f8fbfb] text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#0e847b]/20 blur-3xl" />
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#0e847b]/20 blur-3xl" />


            <div className="relative mx-0 md:mx-auto md:max-w-5xl max-w-[300px] px-4 py-6">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


                    <div className="space-y-5">

                        <Image
                            src="/images/logo.jpeg"
                            alt="FAB"
                            width={170}
                            height={170}
                            className="object-contain"
                        />

                        <p className="text-gray-600 leading-7 text-sm">
                            Secure and smarter financial
                            solutions across the UAE with trusted mortgage.
                        </p>


                    </div>



                    {/* Explore */}
                    <div>

                        <h3 className="text-md text-gray-700 font-semibold">
                            Explore
                        </h3>

                        <ul className="space-y-4 text-gray-600 text-sm mt-4">
                            <li>
                                <Link href="/about" className="hover:text-[#0e847b] cursor-pointer">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/services" className="hover:text-[#0e847b] cursor-pointer">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link href="/calculator" className="hover:text-[#0e847b] cursor-pointer">
                                    Calculator
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-[#0e847b] cursor-pointer">
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>




                    {/* Services */}
                    <div>

                        <h3 className="text-md text-gray-700 font-semibold">
                            Services
                        </h3>


                        <ul className="space-y-4 text-gray-600 text-sm mt-4">
                            <li>
                                <Link href="/services#mortgages" className="hover:text-[#0e847b] cursor-pointer">
                                    Mortgages
                                </Link>
                            </li>

                            <li>
                                <Link href="/services#business-finance" className="hover:text-[#0e847b] cursor-pointer">
                                    Business Finance
                                </Link>
                            </li>

                            <li>
                                <Link href="/services#golden-visa" className="hover:text-[#0e847b] cursor-pointer">
                                    Golden Visa
                                </Link>
                            </li>

                            <li>
                                <Link href="/services#financial-advisory" className="hover:text-[#0e847b] cursor-pointer">
                                    Financial Advisory
                                </Link>
                            </li>

                            <li>
                                <Link href="/services#residency-support" className="hover:text-[#0e847b] cursor-pointer">
                                    Residency Support
                                </Link>
                            </li>

                        </ul>

                    </div>





                    {/* Contact */}
                    <div>

                        <h3 className="text-md text-gray-700 font-semibold">
                            Contact Us
                        </h3>


                        <div className="space-y-5 text-sm text-gray-600">

                            <div className="flex gap-3">
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

                {/* Map + CTA */}
                <div className="mt-12 flex flex-col items-center justify-center gap-6">
                    {/* Map */}

                        <div className="overflow-hidden rounded-3xl shadow-xl border border-black/10 w-full max-w-[700px]">
                            <iframe
                                className="w-full h-[250px] md:h-[320px]"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps?q=Office+1104,+Al+Fattan+Office+Tower,+Dubai+Marina,+Dubai,+UAE&output=embed"
                            />
                        </div>


                    {/* CTA Button */}

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


                <div className="mt-12 border-t border-black/10 pt-6">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} FAB Financial Broker.
                            All rights reserved.
                        </p>

                        <div className="flex gap-6 text-sm text-gray-500">

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
        </section >
    )
};