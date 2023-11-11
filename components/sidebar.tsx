import React from 'react';

const Sidebar = () => {
  return (
    <aside className='fixed top-0 right-0 w-64 bg-blue h-screen'>
      <div className='py-4 mt-32'>
        <ul className='text-white text-end text-base'>
          <a className='group'>
            <li className='menu-link relative py-4 pr-8'>
                خانه
            </li>
          </a>
          <a>
            <li className='py-4 pr-8 menu-link relative'>
                لیست املاک
            </li>
          </a>
          <a>
            <li className='py-4 pr-8 menu-link relative'>
                لیست کاربران
            </li>
          </a>
          <a>
            <li className='py-4 pr-8 menu-link relative'>
                ویرایش اطلاعات سایت
            </li>
          </a>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
