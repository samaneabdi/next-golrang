'use client';
import { HouseCardData } from '../api/house-card'
import { HouseCardType } from '../data-type/house-card';
import Carousel from './carousel';

const HouseCard = () =>{

    return(
        <>
            {HouseCardData.map((card : HouseCardType) => (
                <div key={card.id} className='p-4 text-center'>
                    <div className='basis-1/4 shadow-lg w-fit rounded-lg' dir="rtl">
                        <div className='relative'>
                            <Carousel images={card.images} />
                            <svg className="h-6 w-6 text-white absolute bottom-2 left-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>
                        </div>

                    <div className='p-4 '>
                        <div className='flex  mb-3'>
                            <p className='font-bold text-base'>{card.rentAmount}</p>
                            <p className='mx-2'>|</p>
                            <p className='font-bold text-base'>{card.securityDeposit}</p>
                        </div>
                        <div className='flex text-xs mb-3'>
                            <div className='flex me-5'>
                                <span className="material-symbols-outlined text-xs">face</span>
                                <p>{card.bedrooms}</p>
                            </div>
                            <div className='flex me-5'>
                                <svg className="h-3 w-3 ml-1 text-black"  width="24" height="24" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" > <path fill="var(--ci-primary-color, currentColor)" d="M256,30.4,96,168.681V232H416V168.681ZM384,200H128V183.319L256,72.7,384,183.319Z"/> <path fill="var(--ci-primary-color, currentColor)" d="M96,343.319,256,481.6,416,343.319V280H96ZM128,312H384v16.681L256,439.3,128,328.681Z"/> </svg>
                                <p>{card.elevator}</p>
                            </div>
                            <div className='flex'>
                                <svg className="h-3 w-3 ml-1 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" />  <line x1="9" y1="4" x2="9" y2="17" />  <line x1="15" y1="7" x2="15" y2="20" /></svg>
                                <p>{card.area}</p>
                            </div>
                        </div>
                        <div className='flex justify-between text-xs'>
                            <div className='flex'>
                                <svg className="h-3 w-3 ml-1 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
                                <p>{card.address}</p>
                            </div>
                            <button className='font-bold text-blue bg-light-blue px-2 py-1 rounded'> مشاهده جزییات </button>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default HouseCard;