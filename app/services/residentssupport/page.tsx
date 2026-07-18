"use client";

import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "🪪",
    title: "Emirates ID Services",
    desc: "Complete assistance with Emirates ID applications, renewals and updates.",
  },
  {
    icon: "📄",
    title: "Residency Services",
    desc: "Support for residency applications, renewals and essential documentation.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Sponsorship",
    desc: "Professional guidance for sponsoring spouses, children and dependents.",
  },
  {
    icon: "🏛️",
    title: "Government Services",
    desc: "Expert assistance with official UAE government procedures and approvals.",
  },
];

export default function ResidentsSupportPage() {
  return (
    <>
      <Sidebar />

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#f8fbfb] pt-32 pb-20">

        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#0e847b]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 lg:ml-32">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* LEFT */}

            <div className="mt-10
                md:mt-0
                lg:mt-0">

              <p className="uppercase tracking-[0.35em] font-semibold text-[#0e847b]">
                Residents Support
              </p>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-gray-900">

                Helping You Settle

                <span className="block text-[#0e847b]">
                  Into Life In UAE
                </span>

              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

                Whether you're relocating, starting a new job,
                or bringing your family to the UAE, our specialists
                simplify residency services with professional guidance
                from start to finish.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-full bg-[#0e847b] px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-[#0e847b] px-8 py-4 font-semibold text-[#0e847b] transition hover:bg-[#0e847b] hover:text-white"
                >
                  Speak To Advisor
                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute inset-0 rounded-[40px] bg-[#0e847b]/10 blur-3xl" />

              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  relative
                  w-full
                  h-[280px]
                  md:h-[450px]
                  rounded-[40px]
                  object-cover
                  shadow-2xl
                "
              >
                <source
                  src="/videos/resident.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6 lg:ml-32">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#0e847b] font-semibold">
              Our Services
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Resident Support Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

              We provide reliable support for essential UAE residency
              services, ensuring every application is handled accurately,
              efficiently and with complete peace of mind.

            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {services.map((item) => (

              <div
                key={item.title}
                className="
                  rounded-[30px]
                  bg-[#f8fbfb]
                  p-8
                  shadow-lg
                  transition
                  duration-500
                  hover:-translate-y-3
                "
              >

                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#0e847b]">
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

            {/* ================= WHY RESIDENTS TRUST FAB ================= */}

      <section className="relative overflow-hidden bg-[#f8fbfb] py-24">

        {/* Background Glow */}
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#0e847b]/10 blur-[140px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:ml-32">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <p className="uppercase tracking-[0.45em] text-[#0e847b] font-semibold">
                Your Trusted Partner
              </p>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">

                Making Every
                <span className="block text-[#0e847b]">
                  Residency Step Easier.
                </span>

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

                Moving to or living in the UAE involves important
                documentation and government procedures. Our dedicated
                specialists simplify every step, ensuring your applications
                are completed correctly, processed efficiently and handled
                with complete transparency.

              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-2">

                  <div className="text-4xl">⚡</div>

                  <h3 className="mt-4 text-xl font-bold">
                    Fast Processing
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Minimize delays with accurate document preparation.
                  </p>

                </div>

                <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-2">

                  <div className="text-4xl">📄</div>

                  <h3 className="mt-4 text-xl font-bold">
                    Complete Documentation
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Every application is reviewed before submission.
                  </p>

                </div>

                <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-2">

                  <div className="text-4xl">🤝</div>

                  <h3 className="mt-4 text-xl font-bold">
                    Dedicated Advisors
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    One specialist guides you throughout the entire process.
                  </p>

                </div>

                <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-2">

                  <div className="text-4xl">🏛️</div>

                  <h3 className="mt-4 text-xl font-bold">
                    Government Expertise
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Professional support for UAE residency procedures.
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute inset-0 rounded-[40px] bg-[#0e847b]/10 blur-3xl" />

              <Image
                src="/images/residentpic.jpg"
                alt="Residents Support"
                width={700}
                height={700}
                className="
                  relative
                  w-full
                  rounded-[40px]
                  object-cover
                  shadow-2xl
                "
              />

              {/* Floating Card */}

              <div
                className="
                  absolute
                  left-1/2
                  bottom-5
                  w-[90%]
                  max-w-sm
                  -translate-x-1/2
                  rounded-[28px]
                  bg-[#0e847b]
                  p-5
                  text-white
                  shadow-2xl
                  translate-y-20

                  lg:left-auto
                  lg:right-5
                  lg:bottom-8
                  lg:w-auto
                  lg:translate-x-0
                  lg:translate-y-25
                "
              >

                <div className="grid grid-cols-2 gap-6">

                  <div>

                    <h3 className="text-2xl font-bold">
                      100%
                    </h3>

                    <p className="mt-2 text-sm text-white/80">
                      Personalized Guidance
                    </p>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      Fast
                    </h3>

                    <p className="mt-2 text-sm text-white/80">
                      Documentation Support
                    </p>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      UAE
                    </h3>

                    <p className="mt-2 text-sm text-white/80">
                      Residency Expertise
                    </p>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      End-to-End
                    </h3>

                    <p className="mt-2 text-sm text-white/80">
                      Application Assistance
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SUPPORT PROCESS ================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          py-24
          mx-4
          md:mx-10
          lg:ml-35
          rounded-[40px]
        "
      >

        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.45em] text-[#0e847b] font-semibold">
              Simple Process
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
              Your Residency Journey
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

              Our specialists guide you through every stage, ensuring a
              smooth and hassle-free residency experience.

            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Discuss your residency requirements with our experts.",
              },
              {
                step: "02",
                title: "Documentation",
                desc: "Prepare and verify all required documents before submission.",
              },
              {
                step: "03",
                title: "Application Support",
                desc: "We manage the process until your residency services are completed.",
              },
            ].map((item) => (

              <div
                key={item.step}
                className="
                  rounded-[30px]
                  bg-[#f8fbfb]
                  p-8
                  text-center
                  shadow-lg
                  transition
                  duration-500
                  hover:-translate-y-3
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0e847b]
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  {item.step}
                </div>

                <h3 className="mt-6 text-xl font-bold">
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

            {/* ================= SUPPORT HIGHLIGHTS ================= */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6 lg:ml-32">

          <div
            className="
              grid
              gap-8
              rounded-[40px]
              bg-[#0e847b]
              p-10
              text-white
              md:grid-cols-3
              md:p-14
            "
          >

            <div className="text-center">

              <h3 className="text-4xl font-bold">
                100%
              </h3>

              <p className="mt-3 text-white/80">
                Personalized Support
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold">
                Fast
              </h3>

              <p className="mt-3 text-white/80">
                Document Processing
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold">
                End-to-End
              </h3>

              <p className="mt-3 text-white/80">
                Residency Assistance
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="my-10 px-4 lg:px-8">

        <div
          className="
            relative
            overflow-hidden
            mx-auto
            w-full
            max-w-[350px]
            md:max-w-5xl
            lg:ml-30
            rounded-[30px]
            lg:rounded-[40px]
            bg-[#0e847b]
            p-6
            md:p-6
            text-center
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
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -left-20
              -bottom-20
              h-72
              w-72
              rounded-full
              bg-yellow-300/20
              blur-3xl
            "
          />

          {/* Floating Shapes */}

          <div
            className="
              absolute
              top-6
              right-6
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
              rounded
              bg-white/20
              animate-bounce
            "
            style={{ animationDuration: "4s" }}
          />

          {/* Decorative Background Pattern */}

          <div className="hidden lg:block absolute top-4 right-20 opacity-20 pointer-events-none">

            <svg
              width="420"
              height="280"
              viewBox="0 0 260 160"
              fill="none"
            >

              <path
                d="M30 120
                   C70 90 90 100 120 70
                   C150 45 190 60 230 25"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              <circle cx="30" cy="120" r="4" fill="white" />
              <circle cx="120" cy="70" r="4" fill="white" />
              <circle cx="230" cy="25" r="5" fill="white" />

            </svg>

          </div>

          {/* Content */}

          <div className="relative z-10">

            <p
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                font-semibold
                text-white/70
              "
            >
              Resident Support
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
              Ready To Begin
              <br />
              Your UAE Journey?
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                md:text-lg
                leading-8
                text-white/90
              "
            >
              Whether you're applying for residency, sponsoring your
              family or completing essential documentation, our experts
              are ready to guide you through every step.
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
                  inline-flex
                  items-center
                  justify-center
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
                Contact Advisor →
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#0e847b]
                "
              >
                Explore Services
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

    </>
  );
}