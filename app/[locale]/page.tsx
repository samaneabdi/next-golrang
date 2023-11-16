import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-5/6 mx-auto mt-8'>
      <div className='flex justify-center'><Image width={250} height={62} src="/images/logo.png" alt="logo"/></div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">      
      </main> 
    </div>
  )
}
