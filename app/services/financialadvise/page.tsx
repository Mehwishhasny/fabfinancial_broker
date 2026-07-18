"use client";

import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";


const advisorySolutions = [
    {
        icon:"📊",
        title:"Wealth Planning",
        desc:"Create structured financial strategies designed around your personal and business goals."
    },
    {
        icon:"💰",
        title:"Investment Guidance",
        desc:"Explore suitable investment opportunities with professional financial insights."
    },
    {
        icon:"🏦",
        title:"Financial Management",
        desc:"Optimize your finances with smart planning and expert recommendations."
    },
    {
        icon:"🎯",
        title:"Goal Based Planning",
        desc:"Build a clear roadmap for achieving your short and long-term objectives."
    }
];


export default function FinancialAdvisoryPage(){

return(
<>

<Sidebar />



{/* ================= HERO ================= */}


<section
className="
relative
overflow-hidden
bg-[#f8fbfb]
pt-32
pb-20
"
>


<div
className="
absolute
-top-32
-right-20
h-96
w-96
rounded-full
bg-yellow-300/20
blur-[140px]
"
/>


<div
className="
absolute
bottom-0
-left-20
h-80
w-80
rounded-full
bg-[#0e847b]/10
blur-[120px]
"
/>



<div
className="
relative
mx-auto
max-w-7xl
px-6
lg:px-12
lg:ml-32
"
>


<div
className="
grid
items-center
gap-14
lg:grid-cols-2
"
>


{/* CONTENT */}


<div>


<p
className="
uppercase
tracking-[0.45em]
font-semibold
text-[#0e847b]
mt-10
lg:mt-0
md:mt-0
"
>
Financial Advisory
</p>



<h1
className="
mt-6
text-4xl
md:text-6xl
font-bold
leading-tight
text-gray-900
"
>

Plan Smarter.
<span
className="
block
text-[#0e847b]
"
>
Build A Stronger Future.
</span>

</h1>



<p
className="
mt-8
max-w-xl
text-lg
leading-8
text-gray-600
"
>

Our financial advisors help individuals and businesses make
confident decisions through personalized strategies,
expert guidance and smart financial planning.

</p>



<div
className="
mt-10
flex
flex-col
sm:flex-row
gap-4
"
>


<Link
href="/contact"
className="
rounded-full
bg-[#0e847b]
px-8
py-4
text-center
font-semibold
text-white
transition
hover:scale-105
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
text-center
font-semibold
text-[#0e847b]
transition
hover:bg-[#0e847b]
hover:text-white
"
>
Get Financial Review
</Link>



</div>


</div>





{/* VIDEO */}


<div
className="
relative
"
>


<div
className="
absolute
inset-0
rounded-[45px]
bg-[#0e847b]/10
blur-3xl
"
/>



<video

autoPlay
muted
loop
playsInline

className="
relative
w-full
h-[420px]
rounded-[45px]
object-cover
shadow-2xl
"

>

<source
src="/videos/advisorvideo.mp4"
type="video/mp4"
/>

</video>



</div>



</div>


</div>


</section>







{/* ================= SOLUTIONS ================= */}



<section
className="
bg-white
py-24
"
>


<div
className="
mx-auto
max-w-6xl
px-6
lg:ml-32
"
>


<div
className="
text-center
"
>


<p
className="
uppercase
tracking-[0.4em]
text-[#0e847b]
font-semibold
"
>
Our Expertise
</p>



<h2
className="
mt-5
text-3xl
md:text-4xl
font-bold
text-gray-900
"
>
Financial Solutions Built Around You
</h2>



<p
className="
mx-auto
mt-5
max-w-3xl
text-gray-600
leading-8
"
>

Every financial journey is unique. We provide personalized
advisory services to help you protect, grow and manage
your wealth effectively.

</p>



</div>





<div
className="
mt-14
grid
gap-8
sm:grid-cols-2
"
>


{advisorySolutions.map((item)=>(


<div
key={item.title}
className="
rounded-[35px]
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
text-5xl
"
>
{item.icon}
</div>



<h3
className="
mt-5
text-2xl
font-bold
text-[#0e847b]
"
>
{item.title}
</h3>



<p
className="
mt-4
leading-7
text-gray-600
"
>
{item.desc}
</p>



</div>


))}


</div>



</div>


</section>

{/* ================= WHY FAB ================= */}


<section
className="
relative
overflow-hidden
bg-[#f8fbfb]
py-24
"
>


<div
className="
absolute
-top-20
right-0
h-96
w-96
rounded-full
bg-[#0e847b]/10
blur-[140px]
"
/>


<div
className="
absolute
bottom-0
left-0
h-80
w-80
rounded-full
bg-yellow-300/10
blur-[120px]
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
items-center
gap-16
lg:grid-cols-2
"
>



{/* LEFT IMAGE + FLOAT CARD */}


<div
className="
relative
order-2
lg:order-1
"
>


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

src="/images/advisorpic.jpg"

alt="Financial Advisor"

width={700}

height={700}

className="
relative
rounded-[45px]
shadow-2xl
"
/>




{/* FLOATING BOX */}


<div
className="
absolute
-bottom-8
right-4
md:right-10
rounded-[30px]
bg-white
p-6
shadow-2xl
"
>


<div
className="
flex
items-center
gap-4
"
>


<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-[#0e847b]
text-2xl
text-white
"
>
✓
</div>



<div>

<h3
className="
text-xl
font-bold
text-gray-900
"
>
Trusted Advice
</h3>


<p
className="
text-sm
text-gray-600
"
>
Personalized strategies
</p>


</div>


</div>


</div>




</div>







{/* RIGHT CONTENT */}


<div
className="
order-1
lg:order-2
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
Why Choose FAB
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

Financial Clarity
<span
className="
block
text-[#0e847b]
"
>
For Every Stage Of Life
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

Making financial decisions requires the right knowledge
and direction. Our specialists analyze your objectives,
understand your priorities and create strategies designed
to support your future.

</p>





<div
className="
mt-10
space-y-5
"
>



{
[
"Personalized financial assessment",
"Expert market knowledge",
"Goal-oriented planning approach",
"Continuous guidance and support"

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
h-9
w-9
items-center
justify-center
rounded-full
bg-[#0e847b]
text-white
font-bold
"
>
✓
</div>



<p
className="
text-gray-700
font-medium
"
>
{item}
</p>



</div>


))
}



</div>



</div>




</div>


</div>


</section>









{/* ================= PROCESS ================= */}



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


<div
className="
mx-auto
max-w-6xl
px-6
"
>


<div
className="
text-center
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
Our Approach
</p>



<h2
className="
mt-5
text-3xl
md:text-4xl
font-bold
text-gray-900
"
>

Your Financial Planning Journey

</h2>



<p
className="
mx-auto
mt-5
max-w-3xl
leading-8
text-gray-600
"
>

A simple and transparent process designed to help
you make confident financial decisions.

</p>



</div>






<div
className="
relative
mt-16
"
>




{/* LINE */}

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
to-yellow-300
md:block
"
/>





{[

{
step:"01",
title:"Financial Consultation",
icon:"💬",
desc:"Understand your goals, current position and future requirements."
},

{
step:"02",
title:"Strategy Development",
icon:"📊",
desc:"Create a personalized financial roadmap based on your objectives."
},

{
step:"03",
title:"Implementation",
icon:"🚀",
desc:"Execute suitable financial solutions with expert guidance."
},

{
step:"04",
title:"Continuous Review",
icon:"🔄",
desc:"Monitor progress and adjust strategies when required."
}


].map((item,index)=>(



<div
key={index}
className={`
relative
mb-16
flex
items-center
gap-6

${index%2===0
?
"md:flex-row"
:
"md:flex-row-reverse"
}
`}
>





{/* ICON */}


<div
className="
flex
w-1/2
justify-center
"
>


<div
className="
flex
h-20
w-20
md:h-32
md:w-32
items-center
justify-center
rounded-full
bg-[#f8fbfb]
border-2
border-[#0e847b]/20
shadow-xl
text-4xl
md:text-6xl
transition
hover:scale-110
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
"
>


<div
className="
h-7
w-7
rounded-full
bg-[#0e847b]
border-4
border-white
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
rounded-[35px]
bg-[#f8fbfb]
p-7
shadow-lg
transition
hover:-translate-y-2
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
"
>
{item.title}
</h3>



<p
className="
mt-4
leading-7
text-gray-600
"
>
{item.desc}
</p>



</div>


</div>




</div>


))}





</div>



</div>



</section>

{/* ================= FINANCIAL HIGHLIGHTS ================= */}


<section
className="
bg-white
py-20
"
>


<div
className="
mx-auto
max-w-6xl
px-6
lg:ml-32
"
>


<div
className="
grid
gap-8
rounded-[40px]
bg-[#0e847b]
p-8
md:p-14
text-white
sm:grid-cols-2
lg:grid-cols-4
"
>


<div
className="
text-center
"
>

<h3
className="
text-4xl
md:text-5xl
font-bold
"
>
10+
</h3>

<p
className="
mt-3
text-white/80
"
>
Financial Experts
</p>

</div>





<div
className="
text-center
"
>

<h3
className="
text-4xl
md:text-5xl
font-bold
"
>
100%
</h3>

<p
className="
mt-3
text-white/80
"
>
Personalized Planning
</p>

</div>






<div
className="
text-center
"
>

<h3
className="
text-4xl
md:text-5xl
font-bold
"
>
360°
</h3>

<p
className="
mt-3
text-white/80
"
>
Financial Assessment
</p>

</div>






<div
className="
text-center
"
>

<h3
className="
text-4xl
md:text-5xl
font-bold
"
>
UAE
</h3>

<p
className="
mt-3
text-white/80
"
>
Market Expertise
</p>

</div>




</div>


</div>


</section>








{/* ================= FINAL CTA ================= */}



<section
className="
my-10
px-4
lg:px-6
"
>


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





{/* Floating Shapes */}



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
rounded
bg-white/20
animate-bounce
"
style={{
animationDuration:"4s"
}}
/>







<div
className="
relative
z-10
"
>



<p
className="
uppercase
tracking-[0.45em]
text-white/70
font-semibold
text-sm
"
>
Financial Advisory
</p>





<h2
className="
mt-5
text-3xl
md:text-5xl
font-bold
leading-tight
"
>

Take Control Of
<span className="block">
Your Financial Future
</span>

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

Speak with our financial advisors today and create
a strategy designed around your goals, lifestyle and future plans.

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

Speak To Advisor →

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

Explore Services

</Link>





</div>



</div>




</div>


</section>







{/* ================= FOOTER ================= */}


<Footer />



</>

)

}