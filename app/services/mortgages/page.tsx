"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const benefits = [
  {
    title: "Competitive Rates",
    desc: "Access attractive mortgage rates from leading UAE banks.",
    icon: "🏦",
  },
  {
    title: "Fast Approval",
    desc: "Quick processing with expert assistance from application to approval.",
    icon: "⚡",
  },
  {
    title: "Expert Guidance",
    desc: "Dedicated mortgage specialists helping you at every stage.",
    icon: "🤝",
  },
  {
    title: "Flexible Options",
    desc: "Resident and Non-Resident mortgage solutions tailored to your needs.",
    icon: "🏡",
  },
];

export default function MortgagesPage() {
  return (
    <>
    <Sidebar />
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f8fbfb] pt-32 pb-20">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 lg:ml-32">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[0.35em] text-[#0e847b] font-semibold">
                Mortgage Solutions
              </p>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                Find The Perfect
                <span className="block text-[#0e847b]">
                  Mortgage In UAE
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                Whether you're buying your first home, refinancing,
                or investing in property, FAB helps you secure the
                right mortgage from leading UAE banks with expert
                guidance every step of the way.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/calculator"
                  className="rounded-full bg-[#0e847b] px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Calculate Mortgage
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-[#0e847b] px-8 py-4 font-semibold text-[#0e847b] transition hover:bg-[#0e847b] hover:text-white"
                >
                  Speak to Advisor
                </Link>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="absolute inset-0 rounded-[40px] bg-[#0e847b]/10 blur-3xl" />

              <Image
                src="/images/house.jpg"
                alt="Mortgage"
                width={500}
                height={500}
                className="relative rounded-[40px] h-120 w-120 shadow-2xl object-cover"
              />

            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">

        <div className="mx-auto max-w-6xl px-6 lg:ml-32">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#0e847b] font-semibold">
              Why Choose FAB
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Mortgage Experts You Can Trust
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Our experienced mortgage consultants work closely with
              leading UAE banks to find financing solutions that match
              your goals. From document preparation to final approval,
              we simplify the entire process.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:border-[#0e847b]"
              >

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0e847b]/10 text-3xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

            {/* MORTGAGE SOLUTIONS */}
      <section className="relative bg-[#f8fbfb] py-20 overflow-hidden">

        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-[#0e847b]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-300/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:ml-32">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#0e847b] font-semibold">
              Our Mortgage Services
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Mortgage Solutions For Every Buyer
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Whether you're purchasing your first home, upgrading your
              property, refinancing an existing mortgage or investing in
              UAE real estate, FAB connects you with the most suitable
              financing options from trusted banking partners.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {/* Card 1 */}
            <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-500 hover:-translate-y-2">

              <div className="mb-5 text-5xl">🏡</div>

              <h3 className="text-2xl font-bold text-[#0e847b]">
                Home Purchase Mortgage
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                Finance your dream home with flexible mortgage plans
                offering competitive interest rates and repayment terms
                designed around your financial goals.
              </p>

            </div>

            {/* Card 2 */}
            <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-500 hover:-translate-y-2">

              <div className="mb-5 text-5xl">💰</div>

              <h3 className="text-2xl font-bold text-[#0e847b]">
                Mortgage Refinance
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                Reduce monthly repayments or secure better interest rates
                by refinancing your existing mortgage through our partner
                banks.
              </p>

            </div>

            {/* Card 3 */}
            <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-500 hover:-translate-y-2">

              <div className="mb-5 text-5xl">🌍</div>

              <h3 className="text-2xl font-bold text-[#0e847b]">
                Non-Resident Mortgage
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                Overseas investors can purchase UAE property through
                specially designed mortgage products with attractive
                financing options.
              </p>

            </div>

            {/* Card 4 */}
            <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-500 hover:-translate-y-2">

              <div className="mb-5 text-5xl">🔄</div>

              <h3 className="text-2xl font-bold text-[#0e847b]">
                Mortgage Buyout
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                Transfer your mortgage to another bank and enjoy improved
                rates, reduced monthly payments and better overall
                financing terms.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY FAB */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6 lg:ml-32">

          <div className="grid gap-16 lg:grid-cols-2 items-center">

            {/* IMAGE */}
            <div>

              <Image
                src="/images/financepg.jpg"
                alt="Mortgage Advisor"
                width={700}
                height={700}
                className="rounded-[40px] shadow-2xl"
              />

            </div>

            {/* CONTENT */}
            <div>

              <p className="uppercase tracking-[0.35em] text-[#0e847b] font-semibold">
                Why FAB
              </p>

              <h2 className="mt-5 text-4xl font-bold text-gray-900">
                We Make Home Financing Easy
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our experienced mortgage advisors compare financing
                options from leading UAE banks, negotiate competitive
                interest rates and handle paperwork on your behalf,
                allowing you to focus on finding your dream property.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-700">
                    Access to leading UAE banks and lenders.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-700">
                    Transparent advice with no hidden surprises.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-700">
                    Fast document processing and approvals.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-700">
                    Dedicated mortgage specialist from start to finish.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* ELIGIBILITY */}
      <section className="relative overflow-hidden bg-[#f8fbfb] py-20">

        <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:ml-32">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#0e847b] font-semibold">
              Eligibility
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Who Can Apply?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              UAE residents and eligible non-residents can apply for
              mortgage financing, subject to bank approval and
              documentation.
            </p>

          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {/* Residents */}
            <div className="rounded-[32px] bg-white p-8 shadow-xl">

              <div className="mb-5 text-5xl">🏠</div>

              <h3 className="text-2xl font-bold text-[#0e847b]">
                UAE Residents
              </h3>

              <ul className="mt-6 space-y-4 text-gray-600 leading-7">

                <li>✔ Age between 21 – 65 years</li>

                <li>✔ Valid Emirates ID</li>

                <li>✔ Stable employment or business income</li>

                <li>✔ Good credit history</li>

                <li>✔ Salary transfer may be required by selected bank</li>

              </ul>

            </div>

            {/* Non Residents */}
            <div className="rounded-[32px] bg-white p-8 shadow-xl">

              <div className="mb-5 text-5xl">🌍</div>

              <h3 className="text-2xl font-bold text-[#0e847b]">
                Non-Residents
              </h3>

              <ul className="mt-6 space-y-4 text-gray-600 leading-7">

                <li>✔ Valid Passport</li>

                <li>✔ Overseas income proof</li>

                <li>✔ Bank statements</li>

                <li>✔ Property details</li>

                <li>✔ Subject to lender eligibility criteria</li>

              </ul>

            </div>

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

                    </div>



                    <div className="mt-10 grid gap-6 md:grid-cols-2">

                        {[
                            "Passport Copy",
                            "Emirates ID (Residents)",
                            "Salary Certificate",
                            "Bank statement (last 6 months)",
                            "Property reservation"

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

<section
    className="
    relative
    overflow-hidden
    bg-[#f8fbfb]
    py-24
    mx-4 md:mx-10
    lg:ml-35
    rounded-[40px]
    mt-10
"
>

    {/* Background Glow */}
    <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-[120px]" />
    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-[120px]" />


    <div className="relative mx-auto max-w-6xl px-6 md:px-8">


        {/* Heading */}

        <div className="text-center">

            <p className="
            uppercase
            tracking-[0.45em]
            text-[#0e847b]
            font-semibold
            ">
                Simple Process
            </p>


            <h2 className="
            mt-5
            text-2xl
            md:text-4xl
            font-bold
            text-gray-900
            ">
                Your Mortgage Journey With FAB
            </h2>


            <p className="
            mx-auto
            mt-5
            max-w-3xl
            text-gray-600
            leading-8
            ">
                From your first consultation to receiving your keys,
                our mortgage specialists make the entire process simple,
                transparent and stress-free.
            </p>


        </div>




        {/* Timeline */}

        <div className="relative mt-24">


            {/* Center Line */}

            <div
                className="
                absolute
                left-1/2
                top-0
                hidden
                h-full
                w-[3px]
                -translate-x-1/2
                bg-gradient-to-b
                from-[#0e847b]
                via-[#14b8a6]
                to-yellow-300
                md:block
                "
            />



            {[
                {
                    step:"01",
                    icon:"💬",
                    title:"Initial Consultation",
                    desc:"We understand your financial goals, income profile and property requirements."
                },
                {
                    step:"02",
                    icon:"📊",
                    title:"Mortgage Assessment",
                    desc:"Our advisors compare mortgage options from leading UAE banks."
                },
                {
                    step:"03",
                    icon:"📄",
                    title:"Application Submission",
                    desc:"We prepare your documents and submit your mortgage application."
                },
                {
                    step:"04",
                    icon:"🏦",
                    title:"Bank Approval",
                    desc:"The bank reviews your application and provides final approval."
                },
                {
                    step:"05",
                    icon:"🔑",
                    title:"Property Completion",
                    desc:"Complete the final process and receive your property financing."
                }

            ].map((item,index)=>(


                <div
                    key={index}
                    className={`
                    relative
                    mb-20
                    flex
                    items-center
                    gap-6 md:gap-10

                    ${
                        index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }
                    `}
                >



                    {/* ICON */}

                    <div className="
                    flex
                    w-1/2
                    justify-center
                    ">


                        <div
                        className="
                        flex
                        h-20
                        w-20
                        md:h-36
                        md:w-36
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        border-2
                        border-[#0e847b]/20
                        shadow-xl
                        text-3xl
                        md:text-6xl
                        transition-all
                        duration-500
                        hover:scale-110
                        hover:border-[#0e847b]
                        "
                        >
                            {item.icon}

                        </div>


                    </div>




                    {/* DOT */}

                    <div
                    className="
                    absolute
                    left-1/2
                    hidden
                    md:flex
                    -translate-x-1/2
                    items-center
                    justify-center
                    "
                    >

                        <div
                        className="
                        h-8
                        w-8
                        rounded-full
                        bg-[#0e847b]
                        border-[6px]
                        border-[#f8fbfb]
                        shadow-lg
                        "
                        />

                    </div>





                    {/* CARD */}

                    <div
                    className="
                    w-full
                    md:w-1/2
                    "
                    >

                        <div
                        className="
                        group
                        rounded-[35px]
                        bg-white
                        p-6
                        md:p-8
                        shadow-lg
                        border
                        border-gray-100
                        transition-all
                        duration-500
                        hover:-translate-y-3
                        hover:shadow-2xl
                        "
                        >


                            <span
                            className="
                            text-sm
                            tracking-widest
                            font-semibold
                            text-[#0e847b]
                            "
                            >
                                STEP {item.step}
                            </span>



                            <h3
                            className="
                            mt-4
                            text-xl
                            md:text-2xl
                            font-bold
                            text-gray-900
                            "
                            >
                                {item.title}
                            </h3>



                            <p
                            className="
                            mt-5
                            leading-8
                            text-gray-600
                            "
                            >
                                {item.desc}
                            </p>



                            <div
                            className="
                            mt-8
                            h-[3px]
                            w-12
                            bg-[#0e847b]
                            transition-all
                            duration-500
                            group-hover:w-full
                            "
                            />


                        </div>

                    </div>



                </div>


            ))}


        </div>


    </div>


</section>


      {/* MORTGAGE HIGHLIGHTS */}

      <section className="bg-white py-10">

        <div className="mx-auto max-w-6xl px-6 lg:ml-32">


          <div className="
            grid
            gap-8
            rounded-[40px]
            bg-[#0e847b]
            p-10
            text-white
            md:grid-cols-3
            md:p-14
          ">


            <div className="text-center">

              <h3 className="text-4xl font-bold">
                80%
              </h3>

              <p className="mt-3 text-white/80">
                Maximum Financing
              </p>

            </div>



            <div className="text-center">

              <h3 className="text-4xl font-bold">
                10-15
              </h3>

              <p className="mt-3 text-white/80">
                Working Days Processing
              </p>

            </div>



            <div className="text-center">

              <h3 className="text-4xl font-bold">
                10+
              </h3>

              <p className="mt-3 text-white/80">
                Banking Partners
              </p>

            </div>


          </div>


        </div>


      </section>



      {/* FINAL CTA */}
<section className="my-10 px-4 lg:px-6">

    <div
        className="
        relative
        overflow-hidden
        mx-auto
        w-full
        max-w-[350px]
        md:max-w-5xl
        lg:ml-35
        rounded-[30px]
        lg:rounded-[40px]
        bg-[#0e847b]
        p-6
        md:p-10
        text-center
        text-white
        "
    >

        {/* Background Glow */}

        <div
            className="
            absolute
            -top-20
            -right-20
            h-60
            w-60
            lg:h-80
            lg:w-80
            rounded-full
            bg-white/10
            blur-3xl
            "
        />

        <div
            className="
            absolute
            -bottom-20
            -left-20
            h-60
            w-60
            lg:h-80
            lg:w-80
            rounded-full
            bg-yellow-300/20
            blur-3xl
            "
        />



        {/* Floating Diamonds */}

        <div
            className="
            absolute
            top-5
            right-5
            h-10
            w-10
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
            bottom-8
            left-8
            h-7
            w-7
            rotate-45
            bg-white/20
            rounded
            animate-bounce
            "
            style={{animationDuration:"4s"}}
        />



        {/* Content */}

        <div className="relative z-10">


            <p
            className="
            uppercase
            tracking-[0.35em]
            text-white/70
            text-sm
            font-semibold
            "
            >
                Mortgage Experts
            </p>



            <h2
            className="
            mt-5
            text-2xl
            md:text-4xl
            lg:text-5xl
            font-bold
            leading-tight
            "
            >
                Ready To Own Your Dream Home?
            </h2>



            <p
            className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            md:text-lg
            leading-8
            text-white/90
            "
            >
                Speak with our mortgage specialists today and discover
                the best financing options available from leading UAE banks.
            </p>



            <div
            className="
            mt-8
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            "
            >


                <a
                href="/contact"
                className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-white
                px-8
                py-4
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
                    Speak To Advisor →
                </a>



                <a
                href="/calculator"
                className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white
                px-8
                py-4
                text-sm
                md:text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-[#0e847b]
                "
                >
                    Mortgage Calculator
                </a>


            </div>


        </div>


    </div>

</section>


      {/* FOOTER */}

      <Footer />


    </>
  );
}