import HouseCard from "@/components/house-card";
import Image from "next/image";

const Home =()=>{
    return(
        <div  dir="rtl">
            <div>
                <Image 
                    className='absolute -mt-14 z-10'
                    src='/images/homePage2.png'
                    alt='houseImage'
                    height={780}
                    width={1440}
                />
            </div>
            <div className="relative z-20 w-3/5 mx-auto">
                <div className="text-xl pt-16 mb-4 w-1/2">جستجوی هوشمند ملک</div>
                <div className="text-4xl bold mb-10 w-1/2">خانهٔ رویاهایت دیگر فقط یک رویا نیست</div>
                <div className="flex flex-row justify-between bg-filter-box p-3 shadow-md rounded-lg">
                    <p className="my-auto">
                        جست‌وجو برای محله
                    </p>
                    <button className="bg-blue text-white py-2 px-6 rounded-md">
                        جست‌وجو
                    </button>
                </div>
            </div>
            <div className="w-4/5 mx-auto mt-32 relative z-20 justify-center">
                <div className='flex flex-row justify-between px-7'>
                    <div className="text-2xl font-medium">جدیدترین خانه‌های اجاره‌ای</div>
                    <div className="text-base font-medium text-blue items-center">مشاهده همه</div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <HouseCard />
                </div>
            </div>
        </div>
    )
}
export default Home;