import Image from "next/image";
import { FC } from "react";

type BenefitProps = {
  title: string;
  description: string;
  icon: string;
  titleBorder?: boolean;
}

export const Benefit: FC<BenefitProps> = ({ title, titleBorder, description, icon }) => {
  return (
    <div className="px-6">
      <div className={`flex items-center gap-1  border-[#20262A1F] pl-6 ${titleBorder ? 'border-r' : ''} max-lg:border-transparent`}>
        <Image src={icon} alt="" width={20} height={20}/>
        <h3 className="font-degular font-medium text-xl">{title}</h3>
      </div>
      <p className="font-degular font-normal text-sm text-[#20262A8C] max-w-[15.75rem] pl-6">{description}</p>
    </div>
  )
}
