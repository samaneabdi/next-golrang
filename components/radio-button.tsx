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
        <div className="flex flex-wrap sm:justify-between px-3 py-3 sm:py-0 mb-6 sm:mb-0 sm:ml-3 items-center sm:w-1/2 text-sm font-medium bg-white-opacity rounded-lg">
            <p className="sm:w-3/5 w-full">{title}</p>
            {Object.entries(radioItem).map(([key,lable], index) => (
                <div key={index} className="flex sm:w-auto w-1/3 items-center ps-3">
                    <input type="radio" id={key} onChange={onChange} value={key} name={radioGroup} className="w-8 h-8"/>
                    <label htmlFor={key} className="sm:w-full py-3 ms-2 text-sm font-medium">{t(`${lable}`)}</label>
                </div>
            ))
            } 
        </div> 
    )
}
export default RadioButton;