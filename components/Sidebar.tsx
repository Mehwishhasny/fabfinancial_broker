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
left-0
z-50
w-full

flex
flex-col
items-center

pt-3

md:left-0
md:top-0
md:h-screen
md:w-40
md:pt-6
"
>


{/* LOGO */}

<div className="
flex
justify-center
items-center
">

<Link href="/">

<Image
src="/images/logo.jpeg"
alt="FAB"
width={180}
height={120}
priority
className="
object-contain
w-[160px]
h-auto

md:w-[140px]
"
/>

</Link>

</div>




{/* NAVBAR */}

<nav
className="
mt-3

flex
items-center
justify-center
gap-3

rounded-full
bg-[#0e847b]
px-5
py-2
opacity-90


md:mt-8
md:flex-col
md:gap-4
md:px-0
md:py-2
md:w-14
md:rounded-[40px]
"
>


{menuItems.map((item)=>{

const Icon=item.icon;


return(

<Link

key={item.label}

href={item.href}

className="
group
relative

flex
items-center
justify-center

h-10
w-10

md:h-12
md:w-12

rounded-full

hover:bg-slate-900

transition-all
duration-300
"

>


<Icon
className="
text-white
w-6
h-6
"
/>


{/* Desktop Tooltip */}

<span
className="
hidden
md:block

absolute
left-14

px-4
py-2

rounded-full
bg-slate-900

text-white
text-sm

opacity-0

group-hover:opacity-100

transition

whitespace-nowrap
"
>

{item.label}

</span>


</Link>


)

})}



</nav>


</aside>


)

}