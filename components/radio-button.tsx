import { useTranslations } from "next-intl";
import { ChangeEventHandler } from "react";

type RadioButtonProps = {
    title: string;
    radioGroup: string;
    radioItem: Record<string, string>;
    onChange: ChangeEventHandler<HTMLInputElement>
}

const RadioButton = ({title, radioGroup, radioItem, onChange} : RadioButtonProps) =>{
    
    const t = useTranslations('Index');
    return(
        <>
            <p className="text-sm sm:w-3/5 w-full whitespace-nowrap">{title}</p>
            {Object.entries(radioItem).map(([key,lable], index) => (
                <div key={index} className="flex sm:w-auto justify-center w-1/3 items-center">
                    <input type="radio" id={key} onChange={onChange} value={key} name={radioGroup} className="w-6 h-6"/>
                    <label htmlFor={key} className="sm:w-full py-3 ms-2 text-sm font-medium">{t(`${lable}`)}</label>
                </div>
            ))
            } 
        </>
    )
}
export default RadioButton;