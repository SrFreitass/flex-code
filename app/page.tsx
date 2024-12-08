"use client";

import { AboutMore } from "./components/AboutMore";
import { Contact } from "./components/Contact";
import { MarqueeScrollBased } from "./components/MarqueeScrollBased";
import { Presentation } from "./components/Presentation";
import { Solutions } from "./components/Solutions";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Workflow } from './components/Workflow';

export default function Home() {
  return (
    <>
    <div className="max-w-[1440px] m-auto px-16 max-[1250px]:px-8 max-sm:px-4">
      <Presentation />
      <AboutMore/>
      <WhyChooseUs />
      <Solutions />
      <Workflow />
    </div>
    <MarqueeScrollBased/>
    <Contact />
    </>
  );
}
