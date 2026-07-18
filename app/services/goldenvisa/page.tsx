"use client";

import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: "🌍",
    title: "Long-Term Residency",
    desc: "Enjoy long-term residency in the UAE with greater stability for you and your family.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Sponsor Your Family",
    desc: "Sponsor your spouse, children and eligible dependents under your Golden Visa.",
  },
  {
    icon: "💼",
    title: "Business Freedom",
    desc: "Establish, own and grow your business with confidence in one of the world's leading economies.",
  },
  {
    icon: "🏡",
    title: "Premium Lifestyle",
    desc: "Access world-class healthcare, education and investment opportunities across the UAE.",
  },
];

export default function GoldenVisaPage() {
  return (
    <>
      <Sidebar />

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen overflow-hidden">

        {/* Background Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/goldenvisa.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55" />

        {/* Decorative Glow */}

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#0e847b]/30 blur-[140px]" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-yellow-400/20 blur-[140px]" />

        {/* Content */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            flex-col
            items-center
            justify-center
            px-6
            text-center
                  mt-10
                md:mt-0
                lg:mt-0
          "
        >

          <p
            className="
              uppercase
              tracking-[0.45em]
              text-[#7ce2da]
              font-semibold
            "
          >
            UAE Residency
          </p>

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              text-white
              md:text-6xl
              lg:text-7xl
            "
          >
            Secure Your
            <span className="block text-yellow-300">
              UAE Golden Visa
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-base
              leading-8
              text-white/90
              md:text-xl
            "
          >
            Whether you're an investor, entrepreneur, professional or
            exceptional talent, our specialists guide you through the
            complete Golden Visa process—from eligibility assessment to
            final approval.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >

            <Link
              href="/contact"
              className="
                rounded-full
                bg-[#0e847b]
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Apply Now →
            </Link>

            <Link
              href="/services"
              className="
                rounded-full
                border
                border-white
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-white
                hover:text-[#0e847b]
              "
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>

      {/* ================= BENEFITS ================= */}

      <section className="relative overflow-hidden bg-[#f8fbfb] py-24">

        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#0e847b]/10 blur-[140px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-12 lg:ml-20">

          <div className="text-center">

            <p className="uppercase tracking-[0.45em] text-[#0e847b] font-semibold">
              Why Choose UAE
            </p>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-5xl">
              Benefits Of A Golden Visa
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Enjoy long-term residency, greater financial freedom and
              access to one of the world's fastest-growing economies.
            </p>

          </div>

          {/* Zig Zag Cards */}

          <div className="mt-20 space-y-14">

            {benefits.map((item, index) => (

              <div
                key={item.title}
                className={`
                  grid
                  items-center
                  gap-10
                  lg:grid-cols-2
                  ${
                    index % 2 === 1
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >

                {/* Card */}

                <div
                  className="
                    rounded-[35px]
                    bg-white
                    p-8
                    shadow-xl
                    transition-all
                    duration-500
                    hover:-translate-y-3
                  "
                >

                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      bg-[#0e847b]/10
                      text-5xl
                    "
                  >
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-6 leading-8 text-gray-600">
                    {item.desc}
                  </p>

                </div>

                {/* Image */}

                <div className="relative">

                  <div className="absolute inset-0 rounded-[40px] bg-[#0e847b]/10 blur-3xl" />

                  <Image
                    src="/images/goldenvisa.jpg"
                    alt="Golden Visa UAE"
                    width={700}
                    height={650}
                    className="
                      relative
                      w-full
                      rounded-[40px]
                      object-cover
                      shadow-2xl
                    "
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

            {/* ================= ELIGIBILITY ================= */}

      <section className="relative overflow-hidden bg-white py-24">

        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#0e847b]/10 blur-[140px]" />


        <div className="relative mx-auto max-w-6xl px-6 lg:ml-32">


          <div className="text-center">

            <p
              className="
              uppercase
              tracking-[0.45em]
              text-[#0e847b]
              font-semibold
              "
            >
              Eligibility
            </p>


            <h2
              className="
              mt-5
              text-3xl
              md:text-5xl
              font-bold
              text-gray-900
              "
            >
              Who Can Apply For A Golden Visa?
            </h2>


            <p
              className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-gray-600
              "
            >
              The UAE Golden Visa is available for qualified investors,
              entrepreneurs, professionals and exceptional talents who
              meet the required criteria.
            </p>

          </div>



          <div
            className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            "
          >


            {/* Investor */}

            <div
              className="
              group
              rounded-[35px]
              border
              border-gray-100
              bg-[#f8fbfb]
              p-8
              shadow-lg
              transition
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "
            >

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[#0e847b]
                text-3xl
                "
              >
                💰
              </div>


              <h3
                className="
                mt-6
                text-2xl
                font-bold
                text-gray-900
                "
              >
                Investors
              </h3>


              <p
                className="
                mt-4
                leading-8
                text-gray-600
                "
              >
                Property investors and business owners looking
                for long-term residency opportunities in the UAE.
              </p>


            </div>




            {/* Entrepreneurs */}

            <div
              className="
              group
              rounded-[35px]
              border
              border-gray-100
              bg-[#f8fbfb]
              p-8
              shadow-lg
              transition
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "
            >

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[#0e847b]
                text-3xl
                "
              >
                🚀
              </div>


              <h3
                className="
                mt-6
                text-2xl
                font-bold
                text-gray-900
                "
              >
                Entrepreneurs
              </h3>


              <p
                className="
                mt-4
                leading-8
                text-gray-600
                "
              >
                Business founders and entrepreneurs building
                innovative companies in the UAE.
              </p>


            </div>




            {/* Professionals */}

            <div
              className="
              group
              rounded-[35px]
              border
              border-gray-100
              bg-[#f8fbfb]
              p-8
              shadow-lg
              transition
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "
            >

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[#0e847b]
                text-3xl
                "
              >
                👨‍💼
              </div>


              <h3
                className="
                mt-6
                text-2xl
                font-bold
                text-gray-900
                "
              >
                Skilled Professionals
              </h3>


              <p
                className="
                mt-4
                leading-8
                text-gray-600
                "
              >
                Qualified professionals with specialized skills
                and valuable expertise.
              </p>


            </div>





            {/* Talent */}

            <div
              className="
              group
              rounded-[35px]
              border
              border-gray-100
              bg-[#f8fbfb]
              p-8
              shadow-lg
              transition
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              "
            >

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[#0e847b]
                text-3xl
                "
              >
                ⭐
              </div>


              <h3
                className="
                mt-6
                text-2xl
                font-bold
                text-gray-900
                "
              >
                Exceptional Talent
              </h3>


              <p
                className="
                mt-4
                leading-8
                text-gray-600
                "
              >
                Specialists, creatives, researchers and talented
                individuals contributing to UAE growth.
              </p>


            </div>


          </div>


        </div>


      </section>






      {/* ================= DOCUMENTS ================= */}


      <section
        className="
        relative
        overflow-hidden
        bg-[#0b1f1d]
        mx-4
        md:mx-10
        lg:ml-35
        rounded-[40px]
        py-24
        text-white
        "
      >


        <div
          className="
          absolute
          -right-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-[#0e847b]/30
          blur-3xl
          "
        />



        <div
          className="
          relative
          mx-auto
          max-w-5xl
          px-6
          "
        >



          <div className="text-center">


            <p
              className="
              uppercase
              tracking-[0.45em]
              text-[#14b8a6]
              font-semibold
              "
            >
              Documentation
            </p>


            <h2
              className="
              mt-5
              text-3xl
              md:text-5xl
              font-bold
              "
            >
              Documents Required
            </h2>


          </div>





          <div
            className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            "
          >


            {[
              "Passport Copy",
              "Passport Size Photograph",
              "Emirates ID (if available)",
              "Investment or Property Documents",
              "Business License / Company Documents",
              "Educational or Professional Certificates"
            ].map((item,index)=>(


              <div
                key={index}
                className="
                flex
                items-center
                gap-5
                rounded-3xl
                bg-white/10
                p-6
                backdrop-blur-xl
                transition
                hover:-translate-y-2
                hover:bg-white/20
                "
              >


                <div
                  className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0e847b]
                  font-bold
                  "
                >
                  ✓
                </div>


                <p className="font-semibold">
                  {item}
                </p>


              </div>


            ))}


          </div>


        </div>


      </section>






      {/* ================= PROCESS ================= */}


      <section
        className="
        relative
        overflow-hidden
        bg-[#f8fbfb]
        py-24
        mx-4
        md:mx-10
        lg:ml-35
        rounded-[40px]
        mt-10
        "
      >


        <div className="mx-auto max-w-6xl px-6">


          <div className="text-center">


            <p
              className="
              uppercase
              tracking-[0.45em]
              text-[#0e847b]
              font-semibold
              "
            >
              Process
            </p>


            <h2
              className="
              mt-5
              text-3xl
              md:text-5xl
              font-bold
              text-gray-900
              "
            >
              Your Golden Visa Journey
            </h2>


          </div>





          <div
            className="
            mt-16
            grid
            gap-8
            md:grid-cols-4
            "
          >


            {[
              {
                no:"01",
                title:"Eligibility Check",
                icon:"🔍"
              },
              {
                no:"02",
                title:"Document Preparation",
                icon:"📄"
              },
              {
                no:"03",
                title:"Application Submission",
                icon:"🚀"
              },
              {
                no:"04",
                title:"Visa Approval",
                icon:"🏆"
              }

            ].map((step)=>(


              <div
                key={step.no}
                className="
                rounded-[35px]
                bg-white
                p-8
                text-center
                shadow-xl
                transition
                hover:-translate-y-3
                "
              >


                <div className="text-5xl">
                  {step.icon}
                </div>


                <span
                  className="
                  mt-6
                  block
                  text-sm
                  font-bold
                  tracking-widest
                  text-[#0e847b]
                  "
                >
                  STEP {step.no}
                </span>


                <h3
                  className="
                  mt-4
                  text-xl
                  font-bold
                  text-gray-900
                  "
                >
                  {step.title}
                </h3>


              </div>


            ))}


          </div>


        </div>


      </section>

            {/* ================= GOLDEN VISA BENEFITS ================= */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-6xl px-6 lg:ml-32">


          <div
            className="
            rounded-[40px]
            bg-[#0e847b]
            p-8
            md:p-14
            text-white
            grid
            gap-10
            md:grid-cols-3
            "
          >


            <div className="text-center">

              <div className="text-5xl">
                🏆
              </div>

              <h3 className="mt-5 text-4xl font-bold">
                10 Years
              </h3>

              <p className="mt-3 text-white/80">
                Long-Term UAE Residency
              </p>

            </div>




            <div className="text-center">

              <div className="text-5xl">
                🌍
              </div>

              <h3 className="mt-5 text-4xl font-bold">
                Global Access
              </h3>

              <p className="mt-3 text-white/80">
                Live, Work & Invest In UAE
              </p>

            </div>





            <div className="text-center">

              <div className="text-5xl">
                👨‍👩‍👧
              </div>

              <h3 className="mt-5 text-4xl font-bold">
                Family
              </h3>

              <p className="mt-3 text-white/80">
                Sponsor Eligible Family Members
              </p>

            </div>



          </div>


        </div>


      </section>







      {/* ================= WHY FAB ================= */}


      <section className="
      relative
      overflow-hidden
      bg-[#f8fbfb]
      py-24
      ">


        <div
          className="
          absolute
          -top-20
          right-0
          h-96
          w-96
          rounded-full
          bg-yellow-300/10
          blur-[140px]
          "
        />


        <div
          className="
          absolute
          bottom-0
          left-0
          h-96
          w-96
          rounded-full
          bg-[#0e847b]/10
          blur-[140px]
          "
        />



        <div
          className="
          relative
          mx-auto
          max-w-7xl
          px-6
          lg:ml-32
          "
        >


          <div
            className="
            grid
            gap-14
            items-center
            lg:grid-cols-2
            "
          >



            {/* IMAGE */}

            <div className="relative">


              <div
                className="
                absolute
                inset-0
                rounded-[45px]
                bg-[#0e847b]/10
                blur-3xl
                "
              />


              <Image

                src="/images/goldenvisa.jpg"

                alt="Golden Visa UAE"

                width={700}

                height={700}

                className="
                relative
                rounded-[45px]
                shadow-2xl
                "

              />


            </div>





            {/* CONTENT */}

            <div>


              <p
                className="
                uppercase
                tracking-[0.45em]
                text-[#0e847b]
                font-semibold
                "
              >
                Why FAB
              </p>




              <h2
                className="
                mt-6
                text-3xl
                md:text-5xl
                font-bold
                leading-tight
                text-gray-900
                "
              >

                Your Trusted Partner
                <span className="block text-[#0e847b]">
                  For UAE Residency
                </span>

              </h2>




              <p
                className="
                mt-7
                text-lg
                leading-8
                text-gray-600
                "
              >

                Navigating Golden Visa requirements can be complex.
                Our specialists simplify the entire journey by helping
                you understand eligibility, prepare documentation and
                complete your application smoothly.

              </p>





              <div
                className="
                mt-10
                space-y-5
                "
              >


                {[
                  "Complete eligibility assessment",
                  "Professional document assistance",
                  "End-to-end application support",
                  "Guidance from experienced consultants"

                ].map((item,index)=>(


                  <div
                    key={index}
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <div
                      className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0e847b]
                      text-white
                      "
                    >
                      ✓
                    </div>


                    <p className="text-gray-700 font-medium">
                      {item}
                    </p>


                  </div>


                ))}



              </div>



            </div>


          </div>


        </div>


      </section>








      {/* ================= FINAL CTA ================= */}



      <section className="my-10 px-4 lg:px-6">


        <div
          className="
          relative
          overflow-hidden
          mx-auto
          w-full
          max-w-[350px]
          md:max-w-5xl
          lg:ml-25
          rounded-[40px]
          bg-[#0e847b]
          p-8
          md:p-14
          text-center
          text-white
          "
        >



          {/* Glow */}


          <div
            className="
            absolute
            -top-20
            -right-20
            h-72
            w-72
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
            h-72
            w-72
            rounded-full
            bg-yellow-300/20
            blur-3xl
            "
          />





          {/* Diamonds */}


          <div
            className="
            absolute
            top-8
            right-8
            h-12
            w-12
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
            bottom-10
            left-10
            h-8
            w-8
            rotate-45
            bg-white/20
            rounded
            animate-bounce
            "
            style={{
              animationDuration:"4s"
            }}
          />





          <div className="relative z-10">



            <p
              className="
              uppercase
              tracking-[0.4em]
              text-white/70
              font-semibold
              "
            >
              Golden Visa Assistance
            </p>




            <h2
              className="
              mt-5
              text-3xl
              md:text-5xl
              font-bold
              "
            >

              Begin Your UAE Residency Journey

            </h2>




            <p
              className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-white/90
              "
            >

              Connect with our Golden Visa specialists and discover
              the right pathway to long-term UAE residency.

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



              <Link

                href="/contact"

                className="
                rounded-full
                bg-white
                px-8
                py-4
                font-semibold
                text-[#0e847b]
                transition
                hover:scale-105
                hover:shadow-2xl
                "
              >

                Speak To Expert →

              </Link>




              <Link

                href="/visa"

                className="
                rounded-full
                border
                border-white
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-white
                hover:text-[#0e847b]
                "
              >

                Check Eligibility

              </Link>



            </div>



          </div>



        </div>


      </section>






      {/* FOOTER */}

      <Footer />
      </>
)
}