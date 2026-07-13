"use client";

import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-white">
        <Hero />
      
      </main>
    </div>
  );
}