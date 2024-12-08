"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-header-blue">
        <p className="p-3 text-center max-[900px]:hidden text-white">
          Discover key API trends from 5,600+ devs and API pros: Postman’s 2024 State of the API report is here!
          {' '}
          <span className="text-[#FF6C37]">Read the report →</span>
        </p>
        <div className="p-3 text-white min-[900px]:hidden overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            Discover key API trends from 5,600+ devs and API pros: Postman’s 2024 State of the API report is here!
            {' '}
            <span className="text-[#FF6C37]">Read the report →</span>
          </div>
        </div>
      </div>
      <header className="border-b border-header-border max-[900px]:hidden font-degular">
        <div className="max-w-[1440px] py-5 px-20  m-auto flex items-center">
          <Image src="/logo/flex-code.png" alt="Flex Code Logo" width={80} height={80} />
          <nav className="ml-[5.75rem] w-full flex items-center justify-between max-lg:ml-4">
            <ul className="flex gap-6 text-nav-links font-medium">
              <li><a >Flex Code</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#why-choose-us">Why Trust Us</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
            <Button className="font-semibold flex items-center gap-1" onClick={() => router.push('/GetStarted')}>
              Get Started
              <MoveRight size={18}/>
            </Button>
          </nav>
          </div>
      </header>
    </>
  );
}
