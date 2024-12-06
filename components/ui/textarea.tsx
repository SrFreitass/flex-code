import { ComponentProps, FC } from "react";

type TextareaProps = ComponentProps<"textarea"> & {
    label: string;
}

export const Textarea: FC<TextareaProps> = (props) => {
    return (
        <div className="flex flex-col font-inter">
            {props.label ? <label>{props.label}</label> : null}
            <textarea {...props} className={`h-28 rounded-md border border-[#969696] bg-transparent p-2 w-full ${props.className}`}/>
        </div>
    )
}