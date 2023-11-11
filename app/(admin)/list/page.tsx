'use client';
import { useState } from 'react';
import HouseCard from "../../../components/house-card";
import { FilterHouseCardItem } from '../../../api/filter-house-card-item';

const Page = () =>{
    
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

    const toggleFilterDropdown = () => {
        setIsFilterDropdownOpen(!isFilterDropdownOpen);
      };
    
      const handleFilterSelect = () => {
        setIsFilterDropdownOpen(false);
      };

      
    return(
        <>
            <div className=' w-3/5 flex flex-wrap justify-between'>
                    <div className='flex ml-14 text-sm text-start text-filter-txt-gray cursor-pointer' onClick={toggleFilterDropdown}>
                        <svg className="w-2.5 h-2.5 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        مرتب سازی بر اساس
                    </div>
                    {isFilterDropdownOpen && (
                        <div className='w-1/5 bg-white px-2 py-6 border rounded-lg shadow-md mt-6 ml-14 absolute z-10'>
                        {FilterHouseCardItem.map((filter, index) => (
                            <div 
                                key={index}
                                className={'py-2 px-4 text-end text-filter-item-gray text-base hover:bg-gray-100 border-b cursor-pointer'}
                                onClick={() => handleFilterSelect()}
                            >
                            {filter.title}
                            </div>
                        ))}
                        </div>
                    )}
                    <div className='font-bold mr-20 text-base text-end'>لیست املاک</div>
            </div>
            <div className='w-3/5 px-12 flex flex-wrap'>
                <div className="w-full h-0.5 bg-white"></div>
                <HouseCard />
            </div>
        </>
    )
}
export default Page;