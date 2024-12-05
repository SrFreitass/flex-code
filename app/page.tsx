import { AboutMore } from "./components/AboutMore";
import { Companies } from "./components/Companies";
import { Presentation } from "./components/Presentation";
import { WhyChooseUs } from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto px-20">
      <Presentation/>
      <AboutMore/>
      <WhyChooseUs/>
      <Companies/>
    </div>
  );
}
