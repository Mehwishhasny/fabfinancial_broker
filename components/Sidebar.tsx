"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Aperture,
    Fingerprint,
    Orbit,
    Calculator,
    MessageSquareText,
    Crown,
} from "lucide-react";

const menuItems = [
    { label: "Home", href: "/", icon: Aperture },
    { label: "About", href: "/about", icon: Fingerprint },
    { label: "Services", href: "/services", icon: Orbit },
    { label: "Golden Visa", href: "/visa", icon: Crown },
    { label: "Calculator", href: "/calculator", icon: Calculator },
    { label: "Contact", href: "/contact", icon: MessageSquareText },
];

export default function Sidebar() {
    return (
       <aside
    className="
    fixed
    top-0
    right-0
    z-50

    w-auto
    h-20

    flex
    items-center

    px-4
    gap-4

    md:left-0
    md:h-screen
    md:w-40
    md:flex-col
    md:gap-4
    md:py-6
  "
>
            {/* Logo */}
           <div className="
    flex
    items-center
    md:justify-center
    md:px-2
    md:py-4
">

    <Link href="/">
        <Image
            src="/images/logo.jpeg"
            alt="FAB"
            width={180}
            height={100}
            priority
            className="
                object-contain
                w-[110px]
                sm:w-[130px]
                md:w-[140px]
                h-auto
            "
        />
    </Link>

</div>

            {/* Menu */}
            <nav
                className="
                    flex
                    flex-row
                    items-center
                    gap-0

                    rounded-full
                    bg-[#0e847b]
                    px-4
                    py-1
                    opacity-80

                    md:mt-2
                    md:w-1/2
                    md:flex-col
                    md:gap-6
                    md:rounded-[40px]
                    md:px-0
                    md:py-4
                    lg:top-0
                "
            >
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                <Link
    key={item.label}
    href={item.href}
    className="
        group
        flex
        flex-col
        md:flex-row
        items-center
        justify-center

        w-12
        md:w-14
        h-auto
        py-1

        rounded-full
        transition-all
        duration-300
        hover:bg-slate-900
    "
>
    <Icon className="w-6 h-6 md:w-6 md:h-6 text-white" />

    <span className="mt-1 text-[6px] text-white md:hidden">
        {item.label}
    </span>

    <span
        className="
            hidden md:block
            absolute left-16
            px-3 py-1
            md:px-5
            rounded-full
            bg-slate-900
            text-white text-xs
            md:text-base
            whitespace-nowrap
            opacity-0
            -translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
        "
    >
        {item.label}
    </span>
</Link>
                    );
                })}
            </nav>
        </aside>
    );
}