const UserFooter = () => {
    return(
        <footer className="z-20 footer relative bg-footer-bg h-80" dir='rtl'>
            <div className="w-4/5 flex flex-row mx-auto mt-24 justify-between">
                <div className="flex flex-col w-1/5">
                    <span className="text-base font-medium">اسم املاکی</span>
                    <p className="text-sm text-gray mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                </div>
                <div className="flex flex-col w-1/5">
                    <span className="text-base font-medium">آدرس</span>
                    <p className="text-sm text-gray mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                </div>
                <div className="flex flex-col w-1/5">
                    <span className="text-base font-medium">شماره تماس</span>
                    <p className="text-sm text-gray mt-3">
                        ۰۹۱۲۳۴۵۶۷۸۹
                    </p>
                    <p className="text-sm text-gray mt-3">
                        ۰۹۱۲۳۴۵۶۷۸۹                        
                    </p>
                    <p className="text-sm text-gray mt-3">
                        ۰۹۱۲۳۴۵۶۷۸۹                        
                    </p>
                </div>
                <div className="text-base flex flex-col my-auto">
                    <button className="bg-light-blue text-blue rounded-sm px-4 py-1">
                        ثبت آگهی
                    </button>
                    <button className="bg-blue text-white rounded-sm mt-4 px-4 py-1">
                        ورود/ثبت نام
                    </button>
                </div>
            </div>
            <div className="w-4/5 mx-auto h-0.5 my-6 bg-footer-border"></div>
            <div className="w-4/5 flex flex-row justify-between mx-auto">
                <div className="text-sm">حق کپی‌رایت برای «اسم املاکی» محفوظ است.</div>
                <div>
                    <span className="material-symbols-outlined text-3xl text-blue -rotate-45 ml-4">send</span>
                    <span className="material-symbols-outlined text-3xl text-blue">nest_protect</span>
                </div>

            </div>         
        </footer>
    )
}
export default UserFooter;