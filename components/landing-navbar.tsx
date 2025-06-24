"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  

  return (
    <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
      <Logo />
      <div className="hidden md:flex items-center gap-x-10">
        <Link href="#products" className="text-gray-700 hover:text-gray-900 transition">
          Products
        </Link>
        <Link href="#pricing" className="text-gray-700 hover:text-gray-900 transition">
          Pricing
        </Link>
        <Link href="#about" className="text-gray-700 hover:text-gray-900 transition">
          About
        </Link>
        <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition">
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <Link href="/login">
          <Button variant="outline" className="rounded-full bg-white hover:bg-gray-100 text-gray-700 px-6 py-2">
            Log In
          </Button>
        </Link>
        <Link href="/get-started">
          <Button className="rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white px-6 py-2">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
