"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function MortgageCalculator() {

    const [residentType, setResidentType] = useState("Resident");

    const [residencyStatus, setResidencyStatus] =
        useState("First Mortgage");

    const [mortgageType, setMortgageType] =
        useState("Primary Market");


    const [propertyPrice, setPropertyPrice] =
        useState(1000000);


    const [years, setYears] =
        useState(25);


    const interestRate = 4.49;




    const downPaymentPercentage =
    residencyStatus === "Second Mortgage"
        ? 60
        : 30;


const downPayment =
    propertyPrice * (downPaymentPercentage / 100);


const loanAmount =
    propertyPrice - downPayment;



    const calculateEMI = () => {

        const monthlyRate =
            interestRate / 12 / 100;


        const months =
            years * 12;


        const emi =
            loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)
            /
            (Math.pow(1 + monthlyRate, months) - 1);


        return Math.round(emi || 0);

    };


    return (

        <main className="bg-[#f8fbfb]">


            <Sidebar />


            {/* ================= HERO ================= */}


            <section
                className="
                relative
                overflow-hidden
                py-28
                px-8
                "
            >


                {/* Background */}

                <div className="absolute inset-0">


                    <Image
                        src="/images/mortgage.jpg"
                        alt="Mortgage"
                        fill
                        className="object-cover opacity-20"
                    />


                    <div
                        className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-white
                        via-white/90
                        to-[#f6d365]/50
                        "
                    />

                </div>



                {/* Graph Background */}

                <div
                    className="
                    absolute
                    right-10
                    top-10
                    opacity-20
                    blur-[2px]
                    "
                >

                    <svg
                        width="520"
                        height="320"
                        viewBox="0 0 500 300"
                        fill="none"
                    >

                        <path
                            d="M0 80H500"
                            stroke="#0e847b"
                            strokeOpacity=".2"
                        />

                        <path
                            d="M0 160H500"
                            stroke="#0e847b"
                            strokeOpacity=".2"
                        />


                        <path
                            d="
                            M20 240
                            C90 220 130 190 200 200
                            C270 210 300 120 370 140
                            C430 155 460 70 490 50
                            "
                            stroke="#0e847b"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />


                        <circle
                            cx="200"
                            cy="200"
                            r="7"
                            fill="#0e847b"
                        />

                        <circle
                            cx="370"
                            cy="140"
                            r="7"
                            fill="#0e847b"
                        />


                        <circle
                            cx="490"
                            cy="50"
                            r="8"
                            fill="#0e847b"
                        />


                    </svg>


                </div>




                {/* Glow */}

                <div
                    className="
                    absolute
                    -right-32
                    -top-32
                    h-96
                    w-96
                    rounded-full
                    bg-[#0e847b]/20
                    blur-3xl
                    "
                />





                <div
                    className="
                    relative
                    z-10
                    ml-40
                    max-w-6xl
                    "
                >


                    <p
                        className="
                        uppercase
                        tracking-[0.45em]
                        text-[#0e847b]
                        font-semibold
                        "
                    >
                        Mortgage Calculator
                    </p>



                    <h1
                        className="
                        mt-6
                        text-5xl
                        font-bold
                        text-gray-900
                        leading-tight
                        "
                    >

                        Plan Your Home
                        <br />
                        With Confidence

                    </h1>




                    <p
                        className="
                        mt-8
                        max-w-3xl
                        text-xl
                        leading-8
                        text-gray-600
                        "
                    >

                        Calculate your estimated mortgage payments,
                        understand your affordability, and plan your
                        next property purchase with confidence.

                    </p>



                    <a
                        href="#calculator"
                        className="
                        inline-flex
                        mt-10
                        rounded-full
                        bg-[#0e847b]
                        px-8
                        py-4
                        text-white
                        font-semibold
                        shadow-lg
                        hover:-translate-y-1
                        transition
                        "
                    >

                        Calculate EMI →

                    </a>


                </div>


            </section>





            {/* ================= CALCULATOR ================= */}


            <section
                id="calculator"
                className="
                relative
                overflow-hidden
                mx-10
                ml-35
                my-20
                rounded-[40px]
                bg-white
                py-20
                px-10
                shadow-xl
                "
            >


                <div className="mx-auto max-w-6xl">


                    {/* Resident Toggle */}

                    <div
                        className="
                        flex
                        justify-center
                        mb-12
                        "
                    >

                        <div
                            className="
                            flex
                            rounded-full
                            bg-[#f8fbfb]
                            p-2
                            shadow
                            "
                        >

                            {["Resident","Non Resident"].map(
                                (item)=>(

                                <button
                                key={item}
                                onClick={()=>setResidentType(item)}
                                className={`
                                px-8
                                py-3
                                rounded-full
                                transition
                                ${
                                    residentType===item
                                    ?
                                    "bg-[#0e847b] text-white"
                                    :
                                    "text-gray-600"
                                }
                                `}
                                >

                                    {item}

                                </button>


                            ))}


                        </div>


                    </div>





                    <div
                        className="
                        grid
                        gap-10
                        md:grid-cols-2
                        "
                    >


                        {/* LEFT CALCULATOR */}

                        <div
                            className="
                            rounded-[35px]
                            bg-[#f8fbfb]
                            p-10
                            "
                        >

                            <h2
                                className="
                                text-3xl
                                font-bold
                                text-gray-900
                                "
                            >

                                {residentType} Mortgage

                            </h2>



                            <p className="mt-3 text-gray-500">
                                Adjust your property details and calculate EMI.
                            </p>



                                                        {/* Residency Status */}

                            <label className="block mt-8 text-sm font-semibold text-gray-700">
                                Residency Status
                            </label>


                            <select
                                value={residencyStatus}
                                onChange={(e)=>
                                    setResidencyStatus(e.target.value)
                                }
                                className="
                                mt-3
                                w-full
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-4
                                outline-none
                                "
                            >

                                <option>
                                    First Mortgage
                                </option>

                                <option>
                                    Second Mortgage
                                </option>

                            </select>





                            {/* Mortgage Type */}


                            <label className="
                            block
                            mt-6
                            text-sm
                            font-semibold
                            text-gray-700
                            ">

                                Mortgage Type

                            </label>


                            <select

                                value={mortgageType}

                                onChange={(e)=>
                                    setMortgageType(e.target.value)
                                }

                                className="
                                mt-3
                                w-full
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-4
                                outline-none
                                "

                            >

                                <option>
                                    Primary Market
                                </option>


                                <option>
                                    Secondary Market
                                </option>


                                <option>
                                    Buyout Developer Payment
                                </option>


                                <option>
                                    Developer + Equity
                                </option>


                                <option>
                                    Cash Against New Property
                                </option>


                            </select>






                            {/* Property Price */}


                            <label className="
                            block
                            mt-6
                            text-sm
                            font-semibold
                            text-gray-700
                            ">

                                Property Price

                            </label>


                            <input

                                type="number"

                                value={propertyPrice}

                                onChange={(e)=>
                                    setPropertyPrice(
                                        Number(e.target.value)
                                    )
                                }


                                className="
                                mt-3
                                w-full
                                rounded-2xl
                                border
                                border-gray-200
                                p-4
                                "

                            />







                            {/* Down Payment */}


                            <label className="
                            block
                            mt-6
                            text-sm
                            font-semibold
                            text-gray-700
                            ">

                                Down Payment

                            </label>


                            <div
                                className="
                                mt-3
                                rounded-2xl
                                bg-white
                                border
                                p-4
                                text-gray-700
                                "
                            >

                                AED {downPayment.toLocaleString()}

                            </div>







                            {/* Interest Rate */}


                            <label className="
                            block
                            mt-6
                            text-sm
                            font-semibold
                            text-gray-700
                            ">

                                Interest Rate

                            </label>


                            <div
                                className="
                                mt-3
                                rounded-2xl
                                bg-white
                                border
                                p-4
                                text-[#0e847b]
                                font-bold
                                "
                            >

                                {interestRate}%

                            </div>







                            {/* Tenure */}


                            <label className="
                            block
                            mt-6
                            text-sm
                            font-semibold
                            text-gray-700
                            ">

                                Loan Tenure: {years} Years

                            </label>


                            <input

                                type="range"

                                min="5"

                                max="30"

                                value={years}

                                onChange={(e)=>
                                    setYears(
                                        Number(e.target.value)
                                    )
                                }

                                className="
                                mt-4
                                w-full
                                accent-[#0e847b]
                                "

                            />


                        </div>









                        {/* RESULT CARD */}


                        <div
                            className="
                            relative
                            overflow-hidden
                            rounded-[35px]
                            bg-[#0b1f1d]
                            p-10
                            text-white
                            "
                        >


                            {/* Glow */}

                            <div
                                className="
                                absolute
                                -right-20
                                -top-20
                                h-72
                                w-72
                                rounded-full
                                bg-[#0e847b]/30
                                blur-3xl
                                "
                            />




                            <div className="relative z-10">


                                <p className="
                                text-gray-300
                                text-lg
                                ">

                                    Estimated Monthly EMI

                                </p>




                                <h2
                                    className="
                                    mt-6
                                    text-5xl
                                    font-bold
                                    text-[#14b8a6]
                                    "
                                >

                                    AED {calculateEMI().toLocaleString()}

                                </h2>





                                <div
                                    className="
                                    mt-12
                                    space-y-6
                                    "
                                >


                                    <div
                                        className="
                                        flex
                                        justify-between
                                        border-b
                                        border-white/10
                                        pb-4
                                        "
                                    >

                                        <span>
                                            Property Value
                                        </span>


                                        <strong>
                                            AED {propertyPrice.toLocaleString()}
                                        </strong>

                                    </div>





                                    <div
                                        className="
                                        flex
                                        justify-between
                                        border-b
                                        border-white/10
                                        pb-4
                                        "
                                    >

                                        <span>
                                            Loan Amount
                                        </span>


                                        <strong>
                                            AED {loanAmount.toLocaleString()}
                                        </strong>

                                    </div>






                                    <div
                                        className="
                                        flex
                                        justify-between
                                        border-b
                                        border-white/10
                                        pb-4
                                        "
                                    >

                                        <span>
                                            Interest Rate
                                        </span>


                                        <strong>
                                            {interestRate}%
                                        </strong>

                                    </div>







                                    <div
                                        className="
                                        flex
                                        justify-between
                                        "
                                    >

                                        <span>
                                            Mortgage Type
                                        </span>


                                        <strong className="text-right">
                                            {mortgageType}
                                        </strong>

                                    </div>



                                </div>






                                <button
                                    className="
                                    mt-12
                                    rounded-full
                                    bg-white
                                    px-8
                                    py-4
                                    font-semibold
                                    text-[#0e847b]
                                    transition
                                    hover:scale-105
                                    "
                                >

                                    Apply For Mortgage →

                                </button>



                            </div>


                        </div>



                    </div>


                </div>


            </section>


            <Footer />
        </main>

    );


}