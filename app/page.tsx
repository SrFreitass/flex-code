import { AboutMore } from "./components/AboutMore";
import { Companies } from "./components/Companies";
import { MarqueeScrollBased } from "./components/MarqueeScrollBased";
import { Presentation } from "./components/Presentation";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Workflow } from './components/Workflow';

export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto px-20">
      <Presentation />
      <AboutMore />
      <WhyChooseUs />
      <Companies />
      <Workflow />
      <MarqueeScrollBased/>
    </div>
  );
}
