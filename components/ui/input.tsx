import { ComponentProps, FC } from "react"

type InputProps  = ComponentProps<'input'> & { label: string }

export const Input: FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col font-inter w-full">
      {props.label ? <label>{props.label}</label> : null}
      <input {...props} className={`rounded-md border border-[#969696] bg-transparent p-2 w-full ${props.className}`} />
    </div>
  )
}
