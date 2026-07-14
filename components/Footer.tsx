"use client";

import Image from "next/image";

export default function Footer(){
    return(
    <section className="relative bg-[#f8fbfb] text-white overflow-hidden">

    {/* Background Glow */}
    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#0e847b]/20 blur-3xl" />
     <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#0e847b]/20 blur-3xl" />


    <div className="relative mx-0 md:mx-auto md:max-w-5xl max-w-[300px] px-4 py-6">


        <div className="grid gap-5 md:grid-cols-5 ml-8">


            {/* Brand */}
            <div>
                <div className="flex justify-start group-hover:justify-start py-2">
                            <Image
                                src="/images/logo.jpeg"
                                alt="FAB"
                                width={136}
                                height={140}
                                className="object-contain"
                            />
            
                        </div>

                <p className="mt-2 leading-7 text-xs text-[#0e847b]">
                    Smart financial solutions designed and expert mortgage guidance.
                </p>


            </div>



            {/* Explore */}
            <div>

                <h3 className="text-md text-gray-700 font-semibold">
                    Explore
                </h3>

                <ul className="mt-5 space-y-3 text-gray-600 text-sm">

                    <li>
                        <a href="#" className="hover:text-[#14b8a6] transition">
                            About Us
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#14b8a6] transition">
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#14b8a6] transition">
                            Mortgage Calculator
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#14b8a6] transition">
                            Contact
                        </a>
                    </li>

                </ul>

            </div>




            {/* Services */}
            <div>

                <h3 className="text-md text-gray-700 font-semibold">
                    Services
                </h3>


                <ul className="mt-5 space-y-3 text-gray-600 text-sm cursor-pointer">

                    <li>
                        Home Loans
                    </li>

                    <li>
                        Business Finance
                    </li>

                    <li>
                        Golden Visa
                    </li>

                    <li>
                        Financial Advisory
                    </li>

                </ul>

            </div>





            {/* Contact */}
            <div>

                <h3 className="text-md text-gray-700 font-semibold">
                    Contact Us
                </h3>


                <div className="mt-5 space-y-3 text-sm text-gray-600">


                    <p>
                        📍 Office 1104, Al Fattan Office Tower, Business Hub, Dubai Marina P.O. Box 48395 UAE
                    </p>


                    <p>
                        📞 +971 54 232 1423
                    </p>


                    <p>
                        ✉ fabfinancialbroker@gmail.com
                    </p>


                </div>


            </div>
              {/* Map */}
        <div className="mt-2 overflow-hidden rounded-3xl border border-black/10">

            <iframe
                className="h-50 w-50"
                src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
                loading="lazy"
            />

        </div>


        </div>



        {/* Bottom */}
        <div className="
            mt-10 
            border-t 
            border-black/10 
            pt-6 
            text-center 
            text-sm 
            text-gray-700
        ">

            © {new Date().getFullYear()} FAB Financial Broker. 
            All rights reserved.

        </div>


    </div>

</section>
    )
};