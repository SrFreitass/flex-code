"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export const Header = () => {
  return (
    <>
      <div className="bg-header-blue font-inter">
        <p className="p-3 text-center max-[900px]:hidden text-white">
          Flex Code transforms ideas into digital reality!
          {' '}
          {/* <span className="text-[#FF6C37]">Read the report →</span> */}
        </p>
        <div className="p-3 text-white min-[900px]:hidden overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            Flex Code transforms ideas into digital reality!
            {' '}
            {/* <span className="text-[#FF6C37]">Read the report →</span> */}
          </div>
        </div>
      </div>
      <header className="border-b border-header-border max-[900px]:hidden font-degular">
        <div className="max-w-[1440px] py-5 px-16 max-[1250px]:px-8  m-auto flex items-center">
          <Image src="/logo/flex-code.png" alt="Flex Code Logo" width={80} height={80} />
          <nav className="ml-[5.75rem] w-full flex items-center justify-between max-lg:ml-4">
            <ul className="flex gap-6 text-nav-links font-medium font-onest">
              <li><Link href="/" >Flex Code</Link></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#why-choose-us">Why Trust Us</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
            <Link href={"/get-started"}>
              <Button className="font-semibold flex items-center gap-1">
                Get Started
                <MoveRight size={18}/>
              </Button>
            </Link>
          </nav>
          </div>
      </header>
    </>
  );
}
