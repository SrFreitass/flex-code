import { ComponentProps, FC } from "react";

type buttonProps = ComponentProps<'button'>;

const className = 'bg-button-bg px-5 py-3 rounded font-manrope text-white';

export const Button: FC<buttonProps> = (props) => {
  return <button {...props} className={`${props.className} ${className}`}>{ props.children }</button>;
}
