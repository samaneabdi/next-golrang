import React from 'react';
type TapProps = {
    title: string,
    children: React.ReactNode
}
const Tab = ({ title, children }: TapProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Tab;