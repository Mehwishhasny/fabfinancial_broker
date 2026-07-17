"use client";

import Image from "next/image";

const images = [
    "/images/bank.webp",
    "/images/bank5.webp",
    "/images/bank2.webp",
    "/images/bank3.webp",
    "/images/bank4.webp",
];

export default function ImageSlider() {
    return (
        <section
            className="
                relative
                w-[300px]
                lg:w-[1000px]
                overflow-hidden
                py-10
                lg:py-20
                px-6
                lg:px-20
                mx-6
                lg:ml-50
                bg-transparent
            "
        >
            <div
                className="
                    flex
                    w-max
                    lg:w-[1200px]
                    animate-marquee
                    gap-10
                    sm:gap-14
                    lg:gap-24
                    items-center
                "
            >
                {[...images, ...images].map((img, index) => (
                    <div
                        key={index}
                        className="
                            flex-shrink-0
                            h-12
                            w-24
                            sm:h-14
                            sm:w-28
                            lg:h-16
                            lg:w-32
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <Image
                            src={img}
                            alt={`Bank ${index + 1}`}
                            width={150}
                            height={80}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}