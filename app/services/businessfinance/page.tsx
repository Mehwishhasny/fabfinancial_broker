"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";


const solutions = [
    {
        icon:"🏢",
        title:"Business Loans",
        desc:"Flexible financing solutions to support business expansion, working capital and growth."
    },
    {
        icon:"💳",
        title:"Working Capital Finance",
        desc:"Manage daily operations with customized funding solutions."
    },
    {
        icon:"📈",
        title:"Business Expansion",
        desc:"Secure finance for new branches, equipment and future investments."
    },
    {
        icon:"🌍",
        title:"SME Finance",
        desc:"Dedicated financing options designed for UAE small and medium businesses."
    }
];


export default function BusinessFinancePage(){

return(
<>
<Sidebar />


{/* HERO */}

<section className="
relative
overflow-hidden
bg-[#f8fbfb]
pt-32
pb-20
">

<div className="
absolute
-top-20
-left-20
h-80
w-80
rounded-full
bg-[#0e847b]/10
blur-[120px]
"/>


<div className="
relative
mx-auto
max-w-7xl
px-6
lg:px-12
lg:ml-32
">


<div className="
grid
items-center
gap-14
lg:grid-cols-2
">


<div>


<p className="
uppercase
tracking-[0.35em]
font-semibold
text-[#0e847b]
">
Business Finance
</p>


<h1 className="
mt-6
text-4xl
md:text-6xl
font-bold
leading-tight
text-gray-900
">

Grow Your Business With

<span className="
block
text-[#0e847b]
">
Smart Financing
</span>

</h1>


<p className="
mt-8
max-w-xl
text-lg
leading-8
text-gray-600
">

Access flexible business finance solutions in UAE with expert
guidance and support from application to approval.

</p>



<div className="mt-10 flex flex-wrap gap-4">

<Link
href="/contact"
className="
rounded-full
bg-[#0e847b]
px-8
py-4
font-semibold
text-white
hover:scale-105
transition
"
>
Speak To Advisor
</Link>


<Link
href="/contact"
className="
rounded-full
border
border-[#0e847b]
px-8
py-4
font-semibold
text-[#0e847b]
hover:bg-[#0e847b]
hover:text-white
transition
"
>
Apply Now
</Link>


</div>


</div>



<div className="relative">

<div className="
absolute
inset-0
rounded-[40px]
bg-[#0e847b]/10
blur-3xl
"/>


<Image

src="/images/finance.jpg"

alt="Business Finance"

width={700}

height={700}

className="
relative
rounded-[40px]
shadow-2xl
"
/>


</div>


</div>


</div>


</section>





{/* SOLUTIONS */}

<section className="
relative
bg-white
py-20
">


<div className="
mx-auto
max-w-6xl
px-6
lg:ml-32
">


<div className="text-center">


<p className="
uppercase
tracking-[0.35em]
text-[#0e847b]
font-semibold
">
Our Solutions
</p>


<h2 className="
mt-5
text-4xl
font-bold
text-gray-900
">
Business Finance Solutions
</h2>


</div>



<div className="
mt-14
grid
gap-8
md:grid-cols-2
">


{solutions.map(item=>(

<div
key={item.title}
className="
rounded-[30px]
bg-[#f8fbfb]
p-8
shadow-lg
transition
hover:-translate-y-3
"
>


<div className="text-5xl">
{item.icon}
</div>


<h3 className="
mt-5
text-2xl
font-bold
text-[#0e847b]
">
{item.title}
</h3>


<p className="
mt-4
leading-7
text-gray-600
">
{item.desc}
</p>


</div>


))}


</div>


</div>


</section>






{/* WHY FAB */}


<section className="
bg-[#f8fbfb]
py-20
">


<div className="
mx-auto
max-w-6xl
px-6
lg:ml-32
">


<div className="
grid
gap-12
lg:grid-cols-2
items-center
">


<Image

src="/images/about.jpg"

alt="Business Advisor"

width={600}

height={600}

className="
rounded-[40px]
shadow-xl
"
/>



<div>


<p className="
uppercase
tracking-[0.35em]
text-[#0e847b]
font-semibold
">
Why FAB
</p>


<h2 className="
mt-5
text-4xl
font-bold
">
Finance Made Simple
</h2>


<p className="
mt-6
text-lg
leading-8
text-gray-600
">

Our finance specialists compare solutions from leading
banks and help businesses secure suitable funding.

</p>



<ul className="
mt-8
space-y-4
text-gray-700
">


<li>✔ Competitive financing options</li>
<li>✔ Fast application process</li>
<li>✔ Expert financial guidance</li>
<li>✔ Support throughout approval</li>


</ul>


</div>


</div>


</div>


</section>






{/* PROCESS */}


<section className="
relative
bg-white
py-20
mx-4
md:mx-10
lg:ml-35
rounded-[40px]
">


<div className="
mx-auto
max-w-5xl
px-6
">


<div className="text-center">


<p className="
uppercase
tracking-[0.4em]
text-[#0e847b]
font-semibold
">
Process
</p>


<h2 className="
mt-5
text-3xl
font-bold
">
Your Business Finance Journey
</h2>


</div>




<div className="
mt-12
grid
gap-6
md:grid-cols-3
">


{[
"Consultation",
"Finance Assessment",
"Approval & Funding"

].map((x,i)=>(


<div
key={x}
className="
rounded-3xl
bg-[#f8fbfb]
p-8
shadow-lg
text-center
"
>


<div className="
mx-auto
h-14
w-14
rounded-full
bg-[#0e847b]
text-white
flex
items-center
justify-center
font-bold
">
0{i+1}
</div>


<h3 className="
mt-5
font-bold
text-xl
">
{x}
</h3>


</div>


))}



</div>


</div>


</section>





{/* CTA */}


<section className="my-10 px-4">


<div className="
relative
overflow-hidden
mx-auto
max-w-5xl
rounded-[40px]
bg-[#0e847b]
p-10
md:p-14
text-center
text-white
">


<div className="
absolute
-right-20
-top-20
h-72
w-72
rounded-full
bg-white/10
blur-3xl
"/>


<h2 className="
relative
text-3xl
md:text-5xl
font-bold
">
Ready To Grow Your Business?
</h2>


<p className="
relative
mt-5
text-white/80
text-lg
">
Speak with our finance specialists today.
</p>


<Link

href="/contact"

className="
relative
inline-flex
mt-8
rounded-full
bg-white
px-8
py-4
font-semibold
text-[#0e847b]
hover:scale-105
transition
"
>

Contact Advisor →

</Link>


</div>


</section>



<Footer />

</>

)

}