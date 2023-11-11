
const UserHeader = () => {
    return(
        <header className="z-20 flex flex-row justify-between pt-6 w-4/5 mx-auto" dir="rtl">
            <div>
                <ul className="flex flex-row cursor-pointer">
                    <a className="ml-6 w-28 text-gray">
                        <li>
                            logo
                        </li>
                    </a>
                    <a className="ml-6 text-gray">
                        <li>
                            خانه
                        </li>
                    </a>
                    <a className="ml-6 text-gray">
                        <li>
                            جستجو
                        </li>
                    </a>
                    <a className="ml-6 text-gray">
                        <li>
                            نشان شده ها
                        </li>
                    </a>
                    <a className="ml-6 text-gray">
                        <li>
                            درباره ما
                        </li>
                    </a>
                </ul>
            </div>
            <div className="text-base">
                <button className="bg-light-blue text-blue rounded-sm px-4 py-1">
                    ثبت آگهی
                </button>
                <button className="bg-blue text-[#fff] rounded-sm mr-4 px-4 py-1">
                    ورود/ثبت نام
                </button>
            </div>
        </header>
    )
}
export default UserHeader;