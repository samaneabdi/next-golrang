'use client'
import { ListBoxType } from '@/data-types/list-box-type';
import React, { useState } from 'react';

type MultiSelectProps = {
  title: string,
  data:ListBoxType[],

}

const MultiSelect = ({title, data} : MultiSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<ListBoxType[]>([]);

  const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    
    if (selectedOptions.find(x=>x.id.toString().includes(value))) {
      setSelectedOptions(selectedOptions.filter((option) => option.id.toString() !== value));
    } else {
      const item = data.find(x=>x.id.toString() === value);
      if(item)
        setSelectedOptions([...selectedOptions, item]);
    }
  };

  const handleRemove = (item: ListBoxType) => {    
    if (selectedOptions.includes(item)) {
        setSelectedOptions(selectedOptions.filter((option) => option.id !== item.id));
    } 
  };

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
            {selectedOptions.map((option) => (
                <div className='flex items-center rounded-lg px-2 ml-2 bg-stone ' key={option.id}>
                    <span onClick={() => handleRemove(option)} className="material-symbols-outlined text-sm text-red-secondry ml-3">
                        close
                    </span>
                    <div>
                        {option.name}
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
                    <input className='ml-3' type="checkbox" id={option.id.toString()} value={option.id} onChange={handleCheckboxChange} checked={selectedOptions.includes(option)} />
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
