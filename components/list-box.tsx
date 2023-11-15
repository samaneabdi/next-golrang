import { ListBoxType } from "@/data-types/list-box-type";
import { ChangeEventHandler } from "react";
import { useTranslations } from 'next-intl';

type ListBoxProps ={
    title: string,
    data:ListBoxType[],
    onChange: ChangeEventHandler<HTMLSelectElement>
    value:string
}
const ListBox = ({title, data, value, onChange} : ListBoxProps) =>{
    const t = useTranslations('Index');

    return(
         <select
            id="countries"
            value={value }
            onChange={onChange}
            className="font-bold text-sm sm:ml-3 sm:w-1/2 w-full mb-6 sm:mb-0 p-2 border focus:border-0 active:border-0 border-gray-300 text-gray-900 rounded-lg">
            <option value='' hidden selected>{t(title)}</option>
            {data.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
    )
}
export default ListBox;


