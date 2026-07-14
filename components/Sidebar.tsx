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
    md:left-0
    right-0
    z-50

    w-auto
    h-16

    flex
    items-center

    px-4
    gap-4

    md:h-screen
    md:w-40
    md:flex-col
    md:gap-4
    md:py-6
  "
        >
            {/* Logo */}
            <div className="flex items-center md:justify-center md:px-2 md:py-4">
                <Image
                    src="/images/logo.jpeg"
                    alt="FAB"
                    width={136}
                    height={140}
                    className="object-contain w-24 h-auto md:w-[136px]"
                />
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
                    md:gap-2
                    md:rounded-[40px]
                    md:px-0
                    md:py-0
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
                                relative
                                flex
                                items-center
                                justify-center

                                w-10
                                h-10

                                md:w-14
                                md:h-14

                                rounded-full
                                transition-all
                                duration-300

                                hover:bg-slate-900
                                hover:text-white
                            "
                        >
                            <Icon className="w-4 h-4 md:w-6 md:h-6 text-white opacity-60 blur-5" />

                            {/* Tooltip (Desktop Only) */}
                            <span
                                className="
                                    hidden
                                    md:block

                                    absolute
                                    left-16

                                    px-3
                                    py-1

                                    rounded-full
                                    bg-slate-900
                                    text-white
                                    text-xs

                                    whitespace-nowrap

                                    opacity-0
                                    -translate-x-2

                                    group-hover:opacity-100
                                    group-hover:translate-x-0

                                    transition-all
                                    duration-300
                                    pointer-events-none
                                    shadow-xl
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