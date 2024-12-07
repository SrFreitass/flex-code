import { AboutMore } from "./components/AboutMore";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { MarqueeScrollBased } from "./components/MarqueeScrollBased";
import { Presentation } from "./components/Presentation";
import { Solutions } from "./components/Solutions";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Workflow } from './components/Workflow';

export default function Home() {
  return (
    <>
    <div className="max-w-[1440px] m-auto px-20 max-sm:px-4">
      <Presentation />
      <Clients />
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
