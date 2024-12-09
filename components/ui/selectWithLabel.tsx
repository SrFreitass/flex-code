import { FC } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";


type SelectWithLabelProps = {
    label: string;
    options: string[];
}

export const SelectWithLabel: FC<SelectWithLabelProps> = ({ label, options }) => {
    return (
        <div className="font-inter w-full">
            <label className="block text-sm font-medium text-foreground">{label}</label>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select project size" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option, index) => (
                        <SelectItem key={index} value={option}>{option}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}