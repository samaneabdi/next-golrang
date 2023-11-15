import { ListBoxType } from "@/data-types/list-box-type";
import { ChangeEventHandler } from "react";
import { useTranslations } from 'next-intl';

type ListBoxProps ={
    register?: any,
    title: string,
    data:ListBoxType[],
    onChange: ChangeEventHandler<HTMLSelectElement>,
    value:string,
    isRequired:boolean
}
const ListBox = ({register, title, data, value, onChange, isRequired} : ListBoxProps) =>{
    const t = useTranslations('Index');

    return(
         <select
            {...register(title, { required: isRequired })}
            id={title}
            value={value }
            onChange={onChange}
            className={`${value === '' ? 'font-bold': 'font-normal'} text-sm sm:ml-3 sm:w-1/2 w-full mb-6 sm:mb-0 p-2 border focus:border-0 active:border-0 border-gray-300 text-gray-900 rounded-lg`}>
            <option className="font-bold" value='' hidden selected>{t(title)}</option>
            {data.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
    )
}
export default ListBox;


