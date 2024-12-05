import { MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <>
      <div className="bg-[#1326AB]">
        <p className="p-3 text-center max-[790px]:hidden">
          Discover key API trends from 5,600+ devs and API pros: Postman’s 2024 State of the API report is here!
          {' '}
          <span className="text-[#FF6C37]">Read the report →</span>
        </p>
        <marquee className="p-3 min-[790px]:hidden">
          Discover key API trends from 5,600+ devs and API pros: Postman’s 2024 State of the API report is here!
          {' '}
          <span className="text-[#FF6C37]">Read the report →</span>
        </marquee>
      </div>
      <header className="border-b border-header-border max-[790px]:hidden">
        <div className="max-w-[1289px] px-[2.5rem] py-5 m-auto flex items-center">
          <Image src="/logo/flex-code.png" alt="Flex Code Logo" width={80} height={80} />
          <nav className="ml-[5.75rem] w-full flex items-center justify-between max-[900px]:ml-4">
            <ul className="flex gap-6 text-nav-links">
              <li>Flex Code</li>
              <li>Solutions</li>
              <li>Why Trust Us</li>
              <li>Clients</li>
              <li>Support</li>
            </ul>
            <Button className="font-semibold flex items-center gap-1">
              Get Started
              <MoveRight size={18}/>
            </Button>
          </nav>
          </div>
      </header>
    </>
  );
}
