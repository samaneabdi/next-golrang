'use client'
import React from 'react';
import { ListBoxType } from '@/data-types/list-box-type';

type MultiSelectProps = {
  title: string,
  data:ListBoxType[],
  value:string[],
  handleRemove: (item:string) => void,
  handleCheckboxChange:(event: React.FormEvent<HTMLInputElement>) => void
}

const MultiSelect = ({title, data, value, handleRemove, handleCheckboxChange } : MultiSelectProps) => {

  const toggleMultiselect = () => {
    const dropdownOptions = document.getElementById('mySelectOptions');
    if(dropdownOptions)
        dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <div className="relative z-10 sm:w-1/2 w-full h-11 sm:ml-5 sm:mb-0 mb-6">
      <div className="relative flex items-center justify-between bg-white border rounded-lg cursor-pointer">
        <div className="px-3 py-2 text-black flex flex-wrap text-sm ">
            <div className='relative rounded-lg py-1 px-2 ml-2 font-bold '>{title}</div>
            {value.map((option) => (
                <div className='flex items-center rounded-lg px-2 ml-2 bg-stone ' key={option}>
                    <span onClick={() => handleRemove(option)} className="material-symbols-outlined text-sm text-red-secondry ml-3">
                        close
                    </span>
                    <div>
                        {data.find((e) => e.id.toString() == option)?.name}
                    </div>
                </div>
            ))}
                <div className="w-7 h-7 left-0 top-1 ml-1.5 mt-[2px] absolute bg-gradient-to-br from-lime-700 to-lime-primary rounded shadow"></div>
                <span onClick={toggleMultiselect} className="material-symbols-outlined font-extralight text-white top-2 left-2 absolute">
                    add
                </span>          
        </div>
      </div>
      <div id="mySelectOptions" className='w-full h-28 bg-white text-black rounded-lg p-3 hidden'>
            {data.map((option) => (
                <div key={option.id} className='flex flex-wrap text-sm'>
                    <input className='ml-3' type="checkbox" id={option.id.toString()} value={option.id} onChange={handleCheckboxChange} checked={value.includes(option.id.toString())} />
                    <label>
                        {option.name}
                    </label>
                </div>
            ))}
      </div>
    </div>
  );
};

export default MultiSelect;
